interface Dimension {
    width: string;
    height: string;
}

//let _imagedim: Dimension = {
//  width: "100px",
//  height: "200px"
//};

//function getDimension(): Dimension {
//  let width = "100px";
//  let height = "200px";

//  return {
//    width: width,
//    height: height
//  }
//}

function getDimension(dim: Dimension): string {
    let finaldim = dim.width + "-" + dim.height;
    return finaldim;
}

getDimension({ width: "300px", height: "250px" }); // will get "300px-250px"