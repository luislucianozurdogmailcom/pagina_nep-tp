import React from 'react'
import ReserchCard from './ReserchCard'

function Container(fondo) {

  const personas_investigadoras = [
    {
        name:'M. Florencia Carusela'
        ,ocupation: `I am a PhD in Physics. Currently I am a Professor at the Instituto de Ciencias, Universidad Nacional de General Sarmiento, Buenos Aires, Argentina. I am also a researcher of the National Scientific and Technical Research Council – Argentina. My research area is related to transport phenomena from nano to microscale.`
        ,contact: 'Phone: +54 11 4469-7532. Of: 2121-ICI'
        ,email: 'flor@campus.ungs.edu.ar'
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2018/04/M-300x300.jpg'
    },
    {
        name:'Alejandro Monastra'
        ,ocupation: `Master in Physical Sciences from Universidad de Buenos Aires (1997). PhD in Solid Physics from Université Paris XI (2001). Postdocs in Weizmann Institute of Sciences, Israel (2002), and Technische Universität Dresden, Germany (2003 – 2006). Researcher at Comisión Nacional de Energía Atómica and Conicet, Argentina (2006 – 2012). Professor at UNGS, since 2012. Some of my past and present research interests: Quantum Chaos, Fermi gases, Random Matrix Theory, Non-equilibrium Thermodynamics, Heat transport, Molecular Dynamics, Biophysics.`
        ,contact: 'Phone: +54 11 4469-7500, Int 7212'
        ,email: 'ale_monastra@yahoo.com.ar'
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2018/04/allejandro-monastra-300x300.jpg'
    },
    {
        name:'Adriana Gaudiani'
        ,ocupation: `Adriana Gaudiani is currently a Full-time Assistance Professor at the Science Institute in University  of General Sarmiento (Argentina). She received her Ph.D. degrees in Informatics Science from the University of La Plata (UNLP), Argentina (2015). She joined the HPC for Efficient Applications and Simulations research group at Universitat Autònoma de Barcelona, Spain, as external researcher and the Informatics Research Institute in UNLP as an associate member. She has vast teaching experience at the University level and her main research interests are focused in the fields of HPC resources and parallel programming methodologies for efficient solutions to problems of social impact.`
        ,contact: 'Phone +54 11 4469-7500, Int. 7105'
        ,email: 'agaudiani@campus.ungs.edu.ar'
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2018/04/adriana-gaudiani-300x300.jpg'
    }
  ];

  const personas_postdoctorales = [
    {
        name:'Roberto Barreto'
        ,ocupation: `I’m a young teacher and professor of physic, graduated in 2010 in the National University of General Sarmiento. Currently, I´m professor in the Introduction to physics subject and I work in the complex systems area, in the group heat transport phenomena addressed by Dra. Maria Florencia Carusela. During this last time, I have been a phd student, Conicet researcher and a researcher-professor at U.N.G.S. Also, I have been doing theory, models and simulations by computer, analyzing the phononic energy transport in nanometric devices. My personal interests are the parallel computational physics and it’s applications in the nonequilibrium statistical mechanics.`
        ,contact: 'Phone: +54 11 4469-7500, Int: 7212.'
        ,email: 'rbarreto@campus.ungs.edu.ar'
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2018/04/Roberto-Barreto-194x300.jpg'
    },
    {
        name:'Natalia Beraha'
        ,ocupation: `I am a Physics Teacher and Student of the Doctorate in Science and Technology of the UNGS. I work as a teaching-researcher at the UNGS, in the area of ​​Physics of the Institute of Sciences of the UNGS. My research line is based on the study of the heat transport in systems of low dimension with time-dependent perturbations.`
        ,contact: 'Phone: +54 11 4469-7500, Int: 7212.'
        ,email: 'nberaha@campus.ungs.edu.ar'
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2018/04/Natalia-Beraha-194x300.jpg'
    }
  ];

  const phd_students = [
    {
        name:'Andrea Gotting'
        ,ocupation: `I am a Math Teacher and Student of the Doctorate in Science and Technology of the UNGS. I’m a researcher in the area of Physics of the Institute of Science of the UNGS. My research line is based on the study of the coloidal transport in brownian systems with time-dependent perturbations. Currently my work is oriented to the study and simulation of the motility of microswimmers.`
        ,contact: 'agotting@campus.ungs.edu.ar  '
        ,email: 'nberaha@campus.ungs.edu.ar'
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2018/05/Andrea-Gotting-194x300.jpeg'
    },
    {
        name:'Lucas Chej'
        ,ocupation: `I am a Mechanical Engineer graduated from the Universidad Tecnológica Nacional and a PhD student in Science and Technology, at the Institute of Sciences of the Universidad Nacional de General Sarmiento. My line of research is based on the study of heat transfer in microfluidic devices based on nanofluids, both simple and hybrid, which can operate under normal and critical conditions.`
        ,contact: 'lucas.chej@alumnos.frgp.utn.edu.ar'
        ,email: ''
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-24-at-15.32.03.jpeg'
    },
    {
        name:'Agustín Mancardo Viotti'
        ,ocupation: `Industrial Engineer received from the National University of General Sarmiento. Doctorate student in Science and Technology. University Professor of the Institute of Sciences and Industry.`
        ,contact: 'aviotti@campus.ungs.edu.ar'
        ,email: 'agustinmancardo@gmail.com'
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2018/04/agustin-mancardo-miotti-194x300.jpg'
    },
    {
        name:'Mariano Trigila'
        ,ocupation: `Teacher and Research at Pontifical Catholic University of Argentina | Education: PhD student in progress at National University of La Plata | Licensed systems (five years) | Professional pedagogical training (two years) | Current research Areas: Data science, High Performance Computing and Parallel Computing, Simulation of complex sistems, Optimization, Data Vizualitation.`
        ,contact: 'phone: +54 11 5991 8844'
        ,email: 'marianotrigila@gmail.com'
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2018/06/mariano-194x300.jpg'
    },
    {
        name:'Gastón Eduardo Baeza'
        ,ocupation: `Electromechanical Engineer received from the National University of General Sarmiento. Student of Chemical Engineer and University Professorship in Physics. I am currently working as a school teacher. I am also independently studying programming. My goal is to be able to combine my knowledge in electromechanical systems with chemical systems around my knowledge in programming to achieve complex process simulations that allow me to reach a comprehensive automation and proper design of industrial process.`
        ,contact: 'baeza.gaston1@gmail.com'
        ,email: ''
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2022/06/Gaston_Baeza-237x300.jpg'
    }
    ,
    {
        name:'Athiel Gutierrez'
        ,ocupation: 'I’m a Physics Teacher student at the Universidad General Sarmiento (UNGS) and a computer technician, enthusiastic to the fields of Electricity and Heat Transfer. Currently performing as a Physics, Chemistry teacher in high schools and scholar in the NEP&TP team.'
        ,contact: 'athiell@hotmail.com'
        ,email: ''
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2021/05/61919081-d6af-42b4-844c-3b3a5478543d-225x300.jpg'
    },
    {
        name:'Luciano Zurdo'
        ,ocupation: 'I am an engineering student and intern in the NEP&TP team. I am passionate about physics, coding and fields involving combinations of these. I am currently working on heat transfer models and learning about numerical approximations.'
        ,contact: 'Phone: +54 9 11-3562-1000'
        ,email: 'luislucianozurdo@gmail.com'
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-24-at-13.56.40-169x300.jpeg'
    }
  ];

  const undergraduate = [
    {
        name:'Micaela Cáceres'
        ,ocupation: ``
        ,contact: ''
        ,email: ''
        ,image: 'https://nep-tp.ungs.edu.ar/wp-content/uploads/2023/10/Micaela_foto-155x300.jpg'
    }
  ]

  return (
    <div className={`h-full w-screen pb-10 ${fondo.fondo ? 'bg-gradient-to-t from-slate-200 via-slate-200 to-slate-200' : ' bg-gradient-to-t from-slate-200 via-slate-200 to-slate-200'}`}>
        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 max-w-7xl relative z-10 gap-5'>
            <div className='2xl:col-span-4 lg:col-span-3 md:col-span-2 col-span-1 text-center flex items-center justify-center my-12'>
                <span className='text-5xl font-extralight text-black'>
                    <span className='text-orange-400 font-bold'>Re</span>searchers
                </span>
            </div>
            {personas_investigadoras.map((item, index) => (
                <div className='col-span-1 mx-5'>
                <ReserchCard person={{name: item.name, ocupation: item.ocupation, contact: item.contact, image: item.image, email:item.email}}/>
            </div>
            ))}

            <div className='2xl:col-span-4 lg:col-span-3 md:col-span-2 col-span-1 text-center flex items-center justify-center my-12'>
                <span className='text-5xl font-extralight'>
                    <span className='text-orange-400 font-bold'>Post</span>doctoral Students
                </span>
            </div>
            {personas_postdoctorales.map((item, index) => (
                <div className='col-span-1 mx-5'>
                <ReserchCard person={{name: item.name, ocupation: item.ocupation, contact: item.contact, image: item.image, email:item.email}}/>
            </div>
            ))}

            <div className='2xl:col-span-4 lg:col-span-3 md:col-span-2 col-span-1 text-center flex items-center justify-center my-12'>
                <span className='text-5xl font-extralight'>
                    <span className='text-orange-400 font-bold'>PHD</span> Students
                </span>
            </div>
            {phd_students.map((item, index) => (
                <div className='col-span-1 mx-5'>
                <ReserchCard person={{name: item.name, ocupation: item.ocupation, contact: item.contact, image: item.image, email:item.email}}/>
            </div>
            ))}

            <div className='2xl:col-span-4 lg:col-span-3 md:col-span-2 col-span-1 text-center flex items-center justify-center my-12'>
                <span className='text-5xl font-extralight'>
                    <span className='text-orange-400 font-bold'>Un</span>dergraduate
                </span>
            </div>
            {undergraduate.map((item, index) => (
                <div className='col-span-1 '>
                <ReserchCard person={{name: item.name, ocupation: item.ocupation, contact: item.contact, image: item.image, email:item.email}}/>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Container