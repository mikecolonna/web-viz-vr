import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkPolyDataReader from 'vtk.js/Sources/IO/Legacy/PolyDataReader';

import { writeAnActor } from './vtkOBJExporter.js';

// var fs = require('fs');

export function convertToOBJ() {

    const filename = 'fekcorr-ascii.vtk';
    const reader = vtkPolyDataReader.newInstance();
    reader.setUrl(`${__BASE_PATH__}/src/server/${filename}`).then(() => {
        const polydata = reader.getOutputData(0); // TODO: ?
        const mapper = vtkMapper.newInstance();
        const actor = vtkActor.newInstance();

        actor.setMapper(mapper);
        mapper.setInputData(polydata);

        // obj exporter
        console.log('WRITING ACTOR');
        writeAnActor(actor);
    });

}
