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
      icon: 'code',
      title: 'Desarrollo Frontend',
      description: 'Aplicaciones web modernas, responsivas y escalables con foco en performance.',
      items: ['Angular', 'TypeScript', 'Responsive Design', 'APIs', 'Performance']
    },
    {
      icon: 'layout',
      title: 'UX/UI',
      description: 'Interfaces claras que ordenan flujos, contenido y decisiones visuales.',
      items: ['Wireframes', 'Prototipos', 'Diseño de interfaces', 'Research basico', 'Sistemas de diseño']
    },
    {
      icon: 'pen',
      title: 'Diseño Gráfico',
      description: 'Piezas visuales consistentes para marcas, redes y comunicacion digital.',
      items: ['Branding', 'Redes sociales', 'Flyers', 'Presentaciones', 'Diseño publicitario']
    },
    {
      icon: 'kanban',
      title: 'Gestión de Proyectos Digitales',
      description: 'Organizacion, seguimiento y coordinacion de proyectos para avanzar con foco y claridad.',
      items: ['Planificación', 'Priorización', 'Backlog', 'Trabajo ágil', 'Comunicación']
    },
    {
      icon: 'spark',
      title: 'Ilustración',
      description: 'Recursos visuales propios para reforzar identidad, narrativa y personalidad de marca.',
      items: ['Ilustración digital', 'Personajes', 'Iconografia', 'Composiciones', 'Assets visuales']
    },
    {
      icon: 'ai',
      title: 'INTELIGENCIA ARTIFICIAL',
      description: 'Uso IA como herramienta para acelerar procesos, explorar soluciones y potenciar productos digitales.',
      items: ['Prompts', 'Automatizacion', 'Ideacion', 'Analisis', 'Flujos con IA']
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
      tasks: ['Desarrollo Angular', 'Diseño UX/UI', 'Gestión de proyectos', 'Trabajo ágil']
    },
    {
      company: 'MOI Diseño',
      role: 'Diseñador gráfico freelance',
      period: 'Freelance',
      tasks: ['Branding', 'Diseño digital', 'Redes sociales', 'Diseño visual']
    }
  ];

  workflow = ['Entender el problema', 'Diseñar la experiencia', 'Desarrollar la solución', 'Optimizar y mejorar'];
}
