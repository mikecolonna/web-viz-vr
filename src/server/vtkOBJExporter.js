import vtkDataSet from 'vtk.js/Sources/Common/DataModel/DataSet';
import vtkPolyData from 'vtk.js/Sources/Common/DataModel/PolyData';
import vtkPoints from 'vtk.js/Sources/Common/Core/Points';
import vtkDataArray from 'vtk.js/Sources/Common/Core/DataArray';
import vtkProperty from 'vtk.js/Sources/Rendering/Core/Property';
import vtkCellArray from 'vtk.js/Sources/Common/Core/CellArray';
import { buildFromDegree, buildFromRadian } from 'vtk.js/Sources/Common/Core/MatrixBuilder'

var fs = require('fs');

function writeAnActor(actor) {
    let dataset;            // Common/DataModel/DataSet
    let polydata;           // Common/DataModel/PolyData
    let pointdata;          // ??
    let points;             // Common/Core/Points
    let tcoords = vtkDataArray.newInstance();            // Common/Core/DataArray
    let i, i1, i2, idNext;  // int
    let prop;               // Rendering/Core/Property
    let tempd = [];         // double[]
    let p = [];             // double[]
    let cells = vtkCellArray.newInstance();              // Common/Core/CellArray
    let trans = buildFromRadian();              // ?? Common/Transform/LandmarkTransform
    let npts = 0;           // int
    let indx = null;        // ptr

    const fpObj = './exports/actor.obj';
    const fpMtl = './exports/actor.mtl';

    // see if actor has a mapper
    if (actor.getMapper() == null) {
        return;
    }

    // write out the material properties to the mat file
    prop = actor.getProperty();
    if (actor.getVisibility() == 0) {
        return;
    }

    const id = 0;
    fs.writeFile(fpMtl, `newmtl mtl${id}\n`);
    tempd = prop.getAmbientColor();
    fs.writeFile(fpMtl, `Ka ${tempd[0]} ${tempd[1]} ${tempd[2]}\n`);
    tempd = prop.getDiffuseColor();
    fs.writeFile(fpMtl, `Kd ${tempd[0]} ${tempd[1]} ${tempd[2]}\n`);
    tempd = prop.getSpecularColor();
    fs.writeFile(fpMtl, `Ks ${tempd[0]} ${tempd[1]} ${tempd[2]}\n`);
    fs.writeFile(fpMtl, `Ns ${prop.getSpecularPower()}\n`);
    fs.writeFile(fpMtl, `Tr ${prop.getOpacity()}`);
    fs.writeFile(fpMtl, `illum 3\n\n`);

    // get the mappers input and matrix
    dataset = actor.getMapper().getInput(); // this may not work either

    if (dataset === null) return;

    // actor.getMapper().getInputAlgorithm().update();
    trans.setMatrix(actor.getMatrix());

    // we really want poly data
    // if (dataset.getDataObjectType() != '')
    polydata = dataset.slice();

    // write out the points
    // points = vtkPoints.newInstance();
    // trans.transformPoints(polydata.getPoints(), points);  // not sure about this line
    for (let i = 0; i < polydata.points.size; i++) {
        let point = polydata.points
    }
}

export { writeAnActor };
