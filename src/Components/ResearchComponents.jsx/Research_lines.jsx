import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

function Research_lines() {

    const rows = [
        {
          key: "1",
          Topic: "Thermal transport from micro to nanoscale structures. Phononics in low dimensional systems. Applications to thermal management.",
          Section: "1",
        },
        {
          key: "2",
          Topic: "Nanofluids and microfluidics. Applications to thermal management.",
          Section: "2",
        },
        {
          key: "3",
          Topic: "Transport phenomena of confined soft and active matter.  Applications to thermal management and bioremediation.",
          Section: "3",
        },
        {
          key: "4",
          Topic: "Modelling of intracellular dynamical processes.",
          Section: "4",
        },
        {
          key: "5",
          Topic: "Thermodynamics far from equilibrium and transport phenomena, in open classical and  quantum dissipative systems. Stochastic energetics.",
          Section: "5",
        },
        {
          key: "6",
          Topic: "Transport phenomena in big scale systems. Optimization and modeling of hydrological phenomena.",
          Section: "6",
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

  return (
    <div className={`h-full w-full max-w-7xl pb-10 `}>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 my-10 text-center px-10'>
            <div className='col-span-1 text-4xl font-extralight h-full flex justify-center items-center min-h-40'>
                Research <span className='ml-2 font-bold text-orange-400'> Lines</span>
            </div>
            <Table color='default' aria-label="Example table with dynamic content">
              <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
              </TableHeader>
              <TableBody items={rows}>
                {(item) => (
                  <TableRow key={item.key}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default Research_lines