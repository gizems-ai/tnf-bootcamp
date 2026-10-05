// Prints the largest detected face box, in pixel coords, for the given image.
// usage: facebox <image>   ->  x y w h imgW imgH
import Foundation
import Vision
import CoreImage

let a = CommandLine.arguments
guard a.count == 2 else { exit(2) }
let url = URL(fileURLWithPath: a[1])
guard let ci = CIImage(contentsOf: url) else { print("ERR"); exit(1) }
let W = ci.extent.width, H = ci.extent.height

// Flatten onto white first — Vision is unreliable on images with a transparent field.
let bg = CIImage(color: .white).cropped(to: ci.extent)
let flat = ci.composited(over: bg)
let ctx = CIContext()
guard let cg = ctx.createCGImage(flat, from: flat.extent) else { print("ERR"); exit(1) }

let handler = VNImageRequestHandler(cgImage: cg, options: [:])
let req = VNDetectFaceRectanglesRequest()
do { try handler.perform([req]) } catch { print("ERR"); exit(1) }
guard let faces = req.results as? [VNFaceObservation], !faces.isEmpty else { print("NOFACE"); exit(1) }

let f = faces.max(by: { $0.boundingBox.width * $0.boundingBox.height < $1.boundingBox.width * $1.boundingBox.height })!
let b = f.boundingBox                       // normalised, origin bottom-left
let x = b.minX * W
let w = b.width * W
let h = b.height * H
let y = (1 - b.maxY) * H                    // flip to top-left origin
print("\(Int(x)) \(Int(y)) \(Int(w)) \(Int(h)) \(Int(W)) \(Int(H))")
