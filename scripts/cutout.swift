// Subject cutout via Vision's foreground-instance mask (macOS 14+).
// usage: cutout <in.jpg> <out.png>
import Foundation
import Vision
import CoreImage
import AppKit

let args = CommandLine.arguments
guard args.count == 3 else { FileHandle.standardError.write("usage: cutout in out\n".data(using: .utf8)!); exit(2) }
let inURL = URL(fileURLWithPath: args[1]), outURL = URL(fileURLWithPath: args[2])

guard let ci = CIImage(contentsOf: inURL) else { print("ERR read"); exit(1) }
let handler = VNImageRequestHandler(url: inURL, options: [:])
let req = VNGenerateForegroundInstanceMaskRequest()
do { try handler.perform([req]) } catch { print("ERR vision \(error)"); exit(1) }
guard let obs = req.results?.first else { print("ERR nosubject"); exit(1) }

let pb = try obs.generateScaledMaskForImage(forInstances: obs.allInstances, from: handler)
var mask = CIImage(cvPixelBuffer: pb)
// mask comes back at the model's scale — stretch it onto the source extent
let sx = ci.extent.width / mask.extent.width, sy = ci.extent.height / mask.extent.height
mask = mask.transformed(by: CGAffineTransform(scaleX: sx, y: sy))

let blend = CIFilter(name: "CIBlendWithMask")!
blend.setValue(ci, forKey: kCIInputImageKey)
blend.setValue(CIImage.empty(), forKey: kCIInputBackgroundImageKey)
blend.setValue(mask, forKey: kCIInputMaskImageKey)
guard let out = blend.outputImage?.cropped(to: ci.extent) else { print("ERR blend"); exit(1) }

let ctx = CIContext()
guard let data = ctx.pngRepresentation(of: out, format: .RGBA8, colorSpace: CGColorSpaceCreateDeviceRGB()) else { print("ERR png"); exit(1) }
try data.write(to: outURL)
print("OK")
