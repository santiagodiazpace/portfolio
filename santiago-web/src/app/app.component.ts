import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Santiago Diaz Pace';

  services = [
    {
      title: 'Desarrollo Frontend',
      description: 'Aplicaciones web modernas, responsivas y escalables con foco en performance.',
      items: ['Angular', 'TypeScript', 'Responsive Design', 'APIs', 'Performance']
    },
    {
      title: 'UX/UI',
      description: 'Interfaces claras que ordenan flujos, contenido y decisiones visuales.',
      items: ['Wireframes', 'Prototipos', 'Diseno de interfaces', 'Research basico', 'Sistemas de diseno']
    },
    {
      title: 'Diseno Grafico',
      description: 'Piezas visuales consistentes para marcas, redes y comunicacion digital.',
      items: ['Branding', 'Redes sociales', 'Flyers', 'Presentaciones', 'Diseno publicitario']
    }
  ];

  technologies = ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Figma', 'Illustrator', 'Photoshop', 'Git', 'APIs REST', 'IA aplicada', 'Responsive UI'];

  projects = [
    {
      name: 'Teamwork',
      type: 'App colaborativa',
      description: 'Gestion de equipos, tareas y seguimiento visual para mejorar la coordinacion diaria.',
      problem: 'Ordenar informacion dispersa y hacer mas claro el avance de cada proyecto.',
      tech: ['Angular', 'TypeScript', 'UX/UI']
    },
    {
      name: 'InvoiceAI',
      type: 'Producto con IA',
      description: 'Flujo para analizar facturas, automatizar lectura de datos y acelerar tareas administrativas.',
      problem: 'Reducir carga manual en procesos repetitivos y mejorar la velocidad de respuesta.',
      tech: ['Angular', 'IA', 'APIs']
    },
    {
      name: 'Landing Pages',
      type: 'Web comercial',
      description: 'Paginas rapidas, visuales y enfocadas en conversion para servicios y productos digitales.',
      problem: 'Presentar ofertas de forma clara, confiable y optimizada para mobile.',
      tech: ['HTML', 'CSS', 'Responsive']
    },
    {
      name: 'Branding Digital',
      type: 'Identidad visual',
      description: 'Sistemas visuales para marcas con piezas adaptadas a redes, presentaciones y web.',
      problem: 'Dar coherencia visual a la comunicacion en distintos canales.',
      tech: ['Figma', 'Illustrator', 'Photoshop']
    }
  ];

  experience = [
    {
      company: '7ideas',
      role: 'Frontend Developer / UX/UI / PM',
      period: 'Actualidad',
      tasks: ['Desarrollo Angular', 'Diseno UX/UI', 'Gestion de proyectos', 'Trabajo agil']
    },
    {
      company: 'MOI Diseno',
      role: 'Disenador grafico freelance',
      period: 'Freelance',
      tasks: ['Branding', 'Diseno digital', 'Redes sociales', 'Diseno visual']
    }
  ];

  workflow = ['Entender el problema', 'Disenar la experiencia', 'Desarrollar la solucion', 'Optimizar y mejorar'];
}
