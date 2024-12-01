import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

function Colaborators() {
    const backgroundImage = require('../../Assets/fondo_research.png');

    const columns = [
        {
          key: "colaborator",
          label: "Research collaborators",
        }
      ];

    const colaborators = [
        {"colaborator" : "Dr. Joachim Ankerhold (Universität Ulm, Ulm, Alemania)"
            ,"key" : 1
            ,"url" : ""}
        ,{"colaborator" : "Dr. Luiz Felipe Cavalcanti Pereira;  tng.fisica.ufrn.br,  Universidade Federal do Rio Grande do Norte, Natal, Brasil)"
            ,"key" : 2
            ,"url" : "http://lattes.cnpq.br/3535944621554103"}
        ,{"colaborator" : "Dr. J. Miguel Rubi (Universidad de Barcelona, España"
            ,"key" : 3
            ,"url" : "http://www.ffn.ub.es/webmrubi/"}
        ,{"colaborator" : "Dr. Paolo Malgaretti, Helmholtz Institute Erlangen-Nürnberg for Renewable Energy (IEK-11), Forschungszentrum Jülich, Germany"
            ,"key" : 4
            ,"url" : ""}
        ,{"colaborator" : "Dr. Iván Latella,  Departamento de Física de la Materia Condensada, Barcelona, Spain"
            ,"key" : 5
            ,"url" : ""}
        ,{"colaborator" : "Dra. Luciana Bruno (Departamento de Física, FCEyN, UBA)"
            ,"key" : 6
            ,"url" : ""}
        ,{"colaborator" : "Dra. María Verónica D’Angelo (Facultad de Ingeniería, UBA)"
            ,"key" : 7
            ,"url" : ""}
        ,{"colaborator" : "Dr. Alejandro Soba (Conicet, CNEA)"
            ,"key" : 8
            ,"url" : ""}
        ,{"colaborator" : "Dr. Edgar Bea (Conicet, CNEA)"
            ,"key" : 9
            ,"url" : ""}
        ,{"colaborator" : "Dr. Emilio Luque. (Computer Architecture and Operating Systems Department, Universidad Autónoma de Barcelona, España)"
            ,"key" : 10
            ,"url" : ""}
        ,{"colaborator" : "Dr. Marcelo Naiouf (III-LIDI, Facultad de Informática, UNLP)"
            ,"key" : 11
            ,"url" : ""}
        ,{"colaborator" : "Ing. Pablo García (Laboratorio de Hidráulica, Instituto Nacional del Agua, Buenos Aires)"
            ,"key" : 12
            ,"url" : ""}
        ,{"colaborator" : "Dra. Mariana Freytes (Grupo de Medios Porosos, FIUBA.  Conicet"
            ,"key" : 13
            ,"url" : ""}
        ,{"colaborator" : "Dr. Alejandro D’Onofrio (Grupo de Medios Porosos, FIUBA.  Conicet)"
            ,"key" : 14
            ,"url" : ""}
    ];

    const groups =  [
        {"group" : "Laboratory of Microfluidics, FI-UBA, Buenos Aires, Argentina"
            ,"key" : 1
            ,"url" : ""}
        ,{"group" : "Laboratory of Microbiology and Environmental Chemistry, ICI- UNGS, Buenos Aires, Argentina"
            ,"key" : 2
            ,"url" : ""}
        ,{"group" : "Laboratory of Fluidics, ICI- UNGS, Buenos Aires, Argentina"
            ,"key" : 3
            ,"url" : ""}
    ];

    const columns_group = [
        {
          key: "group",
          label: "Groups",
        }
    ];

    const handleRowClick = (url) => {
        if (url.length < 1 ){

        }else{

            window.open(url,'_blank');
        }
      };

  return (
    <div id='Colaborators' className='w-screen h-full py-10' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className='grid lg:grid-cols-2 gap-2 max-w-7xl mx-auto'>

        <div className='col-span-1 mt-4 min-h-80 lg:col-span-2 flex flex-row justify-center items-center'>
            <span className='font-bold text-orange-400 text-4xl'>Co</span>
            <span className='font-extralight text-gray-300 text-4xl'>laborators</span>
        </div>
        <div className='col-span-1 min-h-32 mt-4 p-4 py-6'>
            <div className="relative z-10 grid grid-cols-1 gap-10 text-center px-2">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-5">
                    <Table color='default' aria-label="Example table with dynamic content">
                      <TableHeader columns={columns}>
                        {(column) => <TableColumn className='bg-orange-300' key={column.key}>{column.label}</TableColumn>}
                      </TableHeader>
                      <TableBody items={colaborators}>
                        {(item) => (
                          <TableRow key={item.key} className="cursor-pointer hover:bg-orange-200 transition-colors duration-200" onClick={() => handleRowClick(item.url)}>
                           {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                </div>
            </div>
        </div>
        <div className='col-span-1 min-h-32 mt-4 p-4 py-6'>
            <div className="relative z-10 grid grid-cols-1 gap-10 text-center px-2">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-5">
                    <Table color='default' aria-label="Example table with dynamic content">
                      <TableHeader columns={columns_group}>
                        {(column) => <TableColumn className='bg-orange-300' key={column.key}>{column.label}</TableColumn>}
                      </TableHeader>
                      <TableBody items={groups}>
                        {(item) => (
                          <TableRow key={item.key} className="cursor-pointer hover:bg-orange-200 transition-colors duration-200" onClick={() => handleRowClick(item.url)}>
                           {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Colaborators