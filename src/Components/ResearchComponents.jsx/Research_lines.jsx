import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

function Research_lines() {
  const rows = [
    {
      key: "1",
      Topic: "Heat and energy transport phenomena - Time dependent systems",
      Section: "1",
      id: "section1" // Añade un identificador único
    },
    {
      key: "2",
      Topic: "Heat and energy transport phenomena - Phononics. Heat transport in micro/nanostructured materials",
      Section: "2",
      id: "section2" // Añade un identificador único
    },
    {
      key: "3",
      Topic: "Transport phenomena in soft and active matter - Flexible filaments in viscous media. Aplications to  biophysics and engineering.",
      Section: "3",
      id: "section3" // Añade un identificador único
    },
    {
      key: "4",
      Topic: "Transport phenomena in soft and active matter - Transport phenomena in soft matter under confinement.",
      Section: "4",
      id: "section4" // Añade un identificador único
    },
    {
      key: "5",
      Topic: "Transport phenomena in large scale complex systems - Computing, Simulation and Optimization to improve river flood prediction. High performance computing to offer solutions to problems of social impact.",
      Section: "5",
      id: "section5" // Añade un identificador único
    },
  ];

  const columns = [
    {
      key: "Section",
      label: "Section",
    },
    {
      key: "Topic",
      label: "Topic",
    },
  ];

  const handleRowClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full pb-10">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        onLoadedData={() => console.log('Video cargado correctamente')}
        onError={(e) => console.error('Error al cargar el video:', e)}
      >
        <source src={require('../../Assets/bacterias.mp4')} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="relative z-10 grid lg:grid-cols-2 grid-cols-1 gap-10 my-10 text-center px-10">
        <div className='col-span-1 text-white text-4xl font-extralight h-full flex justify-center items-center min-h-40'>
          Research <span className='ml-2 font-bold text-orange-400'>Lines</span>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-5">
          <Table color='default' aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
              {(column) => <TableColumn className='bg-orange-300' key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key} className="cursor-pointer hover:bg-orange-200 transition-colors duration-200" onClick={() => handleRowClick(item.id)}>
                  {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Research_lines;
