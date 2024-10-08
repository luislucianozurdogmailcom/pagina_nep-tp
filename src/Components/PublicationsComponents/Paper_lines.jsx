import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

function Paper_lines() {
  const rows = [
    {
      key: "1",
      Title: "Combined Theoretical and Experimental Approaches for Bacterial Aggregation Studies Towards the Improvement of Bioremediation Processes | M.A. Daniel, A.S.Gotting, N.Beraha, M.F.Carusela",
      Year: "2023",
      url: "https://link.springer.com/article/10.1007/s10098-024-02947-3" // Añade un identificador único
    },
    {
      key: "2",
      Title: "Thermal diode assisted by geometry under cycling temperature | L. Zurdo, L. Chej, A. Monastra, F. Carusela",
      Year: "2023",
      url: "https://arxiv.org/pdf/2212.01203" // Añade un identificador único
    },
    {
      key: "3",
      Title: "Heat transport and cooling performance in a nanomechanical system with local and non local interactions | Natalia Beraha, M. Florencia Carusela, Alejandro Soba (2022) [pdf].",
      Year: "2022",
      url: "https://arxiv.org/pdf/2202.10154" // Añade un identificador único
    },
    {
      key: "4",
      Title: "Antiresonant driven systems for particle manipulation | M. Florencia Carusela, Paolo Malgaretti, and J. Miguel Rubi",
      Year: "2021",
      url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.103.062102" // Añade un identificador único
    },
    {
      key: "5",
      Title: "Computational model for membrane transporters. Computational model for membrane transporters. Potential implications for cancer | M.F.Carusela, J. Miguel Rubi",
      Year: "2021",
      url: "https://www.frontiersin.org/journals/cell-and-developmental-biology/articles/10.3389/fcell.2021.642665/full" // Añade un identificador único
    },
    {
      key: "6",
      Title: "Assessment, improvement and comparison of different computational tools used for the simulation of heat transport in nanostructures | Bea, Edgar; Mancardo Viotti, Agustin; Carusela, Florencia; Monastra, Alejandro and Soba, Alejandro (2021) [pdf]",
      Year: "2021",
      url: "https://journals.sagepub.com/doi/10.1177/00375497211009611" // Añade un identificador único
    },
    {
      key: "7",
      Title: "Thermal conductance of structured Silicon nanocrystals | Bea, Edgar; Carusela, María F; Soba, Alejandro; Monastra, Alejandro; Mancardo Viotti, Agustín . Modelling and Simulation in Materials Science and Engineering (2020) [pdf]",
      Year: "2020",
      url: "https://iopscience.iop.org/article/10.1088/1361-651X/aba8eb/meta" // Añade un identificador único
    },
    {
      key: "8",
      Title: "Nonlinear fluctuating hydrodynamics with many conserved fields: The case of a three-dimensional anharmonic chain | R. Barreto, M. F. Carusela, and A. G. Monastra (2019)",
      Year: "2019",
      url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.100.022118" // Añade un identificador único
    },
    {
      key: "9",
      Title: "Evolution of instabilities in filament buckling processes | A. G. Monastra; M. F. Carusela; G. van der Velde; M. V. D’Angelo and L. Bruno (2019)",
      Year: "2019",
      url: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.99.033004" // Añade un identificador único
    },
    {
      key: "10",
      Title: "Optimization and Parallel Computing to Improve River Flow Forecasting | Gaudiani Adriana; Luque Emilio; García Pablo; Naiouf Marcelo; De Giusti Armando. En Computer Science & Technology Series (2018)",
      Year: "2018",
      url: "https://sedici.unlp.edu.ar/bitstream/handle/10915/61164/Documento_completo__.pdf?sequence=1#page=58" // Añade un identificador único
    },
    {
      key: "11",
      Title: "Simulation of heat transport in Silicon nanostructures | A. Mancardo Viotti, E. A. Bea, M. F. Carusela, A. G. Monastra, and A. Soba (2018)",
      Year: "2018",
      url: "https://ri.conicet.gov.ar/handle/11336/103545" // Añade un identificador único
    },
    {
      key: "12",
      Title: "Agile Tuning Method in Successive Steps for a River Flow Simulator | Trigila Mariano; Gaudiani Adriana; Luque Emilio. Lecture Notes in Computer Science, (2018)",
      Year: "2018",
      url: "https://link.springer.com/chapter/10.1007/978-3-319-93713-7_60" // Añade un identificador único
    },
    {
      key: "13",
      Title: "Filament instability under constant loads | A. G. Monastra, M. F. Carusela, M. V. D’Angelo, L. Bruno. IOP Journal of Physics. Conference Series (2018)",
      Year: "2018",
      url: "https://iopscience.iop.org/article/10.1088/1742-6596/1012/1/012010/pdf" // Añade un identificador único
    },
    {
      key: "14",
      Title: "Entropy production and rectification efficiency of colloidal transport along a pulsating confinement | M.F.Carusela, J. Miguel Rubi. Journal of Physics: Condensed Matter, 146, 18",
      Year: "2018",
      url: "https://iopscience.iop.org/article/10.1088/1361-648X/aac0c0/meta" // Añade un identificador único
    },
    {
      key: "15",
      Title: "Thermal conductance of suspended nanoribbons: interplay between strain and interatomic potential nonlinearity | Roberto Barreto, M. Florencia Carusela, Alejandro Monastra, Journal of Statistical Mechanics: Theory and Experiment, 103201 (2017)",
      Year: "2017",
      url: "https://iopscience.iop.org/article/10.1088/1742-5468/aa8c18" // Añade un identificador único
    },
    {
      key: "16",
      Title: "Entropic rectification and current inversion in a pulsating channel | M.F.Carusela, J. Miguel Rubi, Journal of Chemical Physics, 146, 18",
      Year: "2017",
      url: "https://pubs.aip.org/aip/jcp/article-abstract/146/18/184901/195510/Entropic-rectification-and-current-inversion-in-a?redirectedFrom=fulltext" // Añade un identificador único
    },
    {
      key: "17",
      Title: "Characterization of microtubule buckling in living cells | Carla Pallavicini, Alejandro Monastra, Nicolás González Bardeci, Diana Wetzler, Valeria Levi & Luciana Bruno (2017)",
      Year: "2017",
      url: "https://link.springer.com/article/10.1007/s00249-017-1207-9" // Añade un identificador único
    },
    {
      key: "18",
      Title: "How a computational method can help to improve the quality of river flood prediction by simulation | Gaudiani Adriana; Luque Emilio; García Pablo; Re Mariano; Naiouf Marcelo; De Giusti Armando (2016)",
      Year: "2016",
      url: "https://link.springer.com/chapter/10.1007/978-3-319-23455-7_18" // Añade un identificador único
    },
    {
      key: "19",
      Title: "Frequency thermal response and cooling performance in a microscopic system with a time-dependent perturbation. | Beraha N., A. Soba, M.F. Carusela, Physica A, 64, 64 (2016)",
      Year: "2016",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0378437116304423?via%3Dihub" // Añade un identificador único
    },
    {
      key: "20",
      Title: "Thermal expansion in nanoresonators | A. V. Mancardo, A. Monastra, M.Moreno, M.F. Carusela, Journal of Statistical Mechanics: Theory and experiment, 083201 (2016)",
      Year: "2016",
      url: "https://iopscience.iop.org/article/10.1088/1742-5468/2016/08/083201" // Añade un identificador único
    },
    {
      key: "21",
      Title: "Computing, a powerful tool for improving the parameters simulation quality in flood prediction | Gaudiani Adriana; Luque Emilio; García Pablo; Re Mariano; Naiouf Marcelo; De Giusti Armando (2016)",
      Year: "2016",
      url: "https://sedici.unlp.edu.ar/handle/10915/85352" // Añade un identificador único
    },
    {
      key: "22",
      Title: "Thermal transport in a 2D stressed nanostructure with mass gradient | R Barreto, M F Carusela, A Mancardo Viotti, A G Monastra, Papers in Physics 7, 070008 (2015)",
      Year: "2015",
      url: "https://www.papersinphysics.org/index.php/papersinphysics/article/view/226" // Añade un identificador único
    },
    {
      key: "23",
      Title: "Phononic heat transfer through a one dimensional system subject to two sources of nonequilibrium | N.Beraha, A.Soba, M.F.Carusela. Physica A 433 (2015)",
      Year: "2015",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0378437115002770" // Añade un identificador único
    },
    {
      key: "24",
      Title: "Computational method for prediction enhancement of a river flood simulation | Gaudiani Adriana; Luque Emilio; García Pablo; Naiouf Marcelo; De Giusti Armando, (2014)",
      Year: "2014",
      url: "http://enviroinfo.eu/sites/default/files/pdfs/vol8514/0325.pdf" // Añade un identificador único
    },
    {
      key: "25",
      Title: "Work and heat for two-level systems in dissipative environments: Strong driving and non-Markovian dynamics | R. Schmidt, M. F. Carusela, J. P. Pekola, S. Suomela, and J. Ankerhold, Phys. Rev. B 91, 224303 (2015)",
      Year: "2015",
      url: "https://arxiv.org/pdf/1412.6442" // Añade un identificador único
    },
    {
      key: "26",
      Title: "Resonance of heat transfer in one dimensional chains with tunable coupling | Carusela, N. Beraha, R. Barreto, A. Soba, Vol. 24 Núm. 2: Anales AFA ",
      Year: "2014",
      url: "https://anales.fisica.org.ar/index.php/analesafa/article/view/1919" // Añade un identificador único
    },
    {
      key: "27",
      Title: "Wave-packet dynamics in nonlinear Schrödinger equations | S. Moulieras, A. G. Monastra, M. Saraceno, and P. Leboeuf",
      Year: "2012",
      url: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.85.013841" // Añade un identificador único
    },
    {
      key: "28",
      Title: "Quantum phase diffusion in ac-driven superconducting atomic point contacts | M. F. Carusela and J. Ankerhold, Phys. Rev. B 85, 134509",
      Year: "2012",
      url: "https://arxiv.org/pdf/1111.1181" // Añade un identificador único
    },
    {
      key: "29",
      Title: "Modeling Rectification Effects in Mesoscopic Superconducting Devices | M.F.Carusela, V.P.Ramunni, V.I.Marconi , Physica C: Superconductivity Volume 471, Issues 13–14",
      Year: "2011",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0921453411000700" // Añade un identificador único
    },
    {
      key: "30",
      Title: "Casimir force between integrable and chaotic pistons | Ezequiel Álvarez, Francisco D. Mazzitelli, Alejandro G. Monastra, and Diego A. Wisniacki",
      Year: "2010",
      url: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.82.052504" // Añade un identificador único
    },
    {
      key: "31",
      Title: "Induced current in quantum and classical ratchets | M F Carusela, Fendrik, Romanelli ; International Journal of Bifurcation and Chaos",
      Year: "2010",
      url: "https://www.worldscientific.com/doi/abs/10.1142/S0218127410025703" // Añade un identificador único
    },
  ];

  const columns = [
    {
      key: "Year",
      label: "Year",
    },
    {
      key: "Title",
      label: "Title",
    },
  ];

  const handleRowClick = (url) => {
    window.open(url,'_blank');
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
      <div className="relative z-10 grid lg:grid-cols-1 grid-cols-1 gap-10 my-10 text-center px-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-5">
          <Table color='default' aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
              {(column) => <TableColumn className='bg-orange-300' key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
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
  );
}

export default Paper_lines;
