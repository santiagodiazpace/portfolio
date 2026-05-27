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
      items: ['Wireframes', 'Prototipos', 'Diseño de interfaces', 'Research básico', 'Sistemas de diseño']
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
      description: 'Organización, seguimiento y coordinación de proyectos para avanzar con foco y claridad.',
      items: ['Planificación', 'Priorización', 'Backlog', 'Metodologías ágiles', 'Comunicación']
    },
    {
      icon: 'spark',
      title: 'Ilustración',
      description: 'Recursos visuales propios para reforzar identidad, narrativa y personalidad de marca.',
      items: ['Ilustración digital', 'Personajes', 'Iconografia', 'Composiciones', 'Assets visuales']
    },
    {
      icon: 'ai',
      title: 'Inteligencia Artificial',
      description: 'Uso de IA como herramienta para acelerar procesos, explorar soluciones y potenciar productos digitales.',
      items: ['Prompts', 'Ideación', 'Análisis', 'IA Generativa']
    }
  ];

  projects = [
    {
      name: 'AppWork',
      type: 'App colaborativa',
      image: '/assets/appwork.png',
      description: 'Gestión de equipos, tareas y seguimiento para mejorar la coordinación diaria. Desarrollo frontend.',
      problem: 'Desarrollar app y ordenar información dispersa y hacer más claro el avance de cada proyecto.',
      tech: ['Angular', 'HTML', 'CSS','TypeScript', 'UX/UI']
    },
    {
      name: 'InvoiceAI',
      type: 'Producto con IA',
      image: '/assets/invoiceai.png',
      description: 'Flujo para analizar facturas, automatizar lectura de datos y acelerar tareas administrativas.',
      problem: 'Reducir carga manual en procesos repetitivos y mejorar la velocidad de respuesta.',
      tech: ['Angular', 'HTML', 'CSS','IA', 'APIs']
    },
    {
      name: 'Landing Page',
      type: 'Web comercial',
      image: '/assets/sieteideas.png',
      description: 'Páginas rápidas, visuales y enfocadas en conversión para servicios y productos digitales.',
      problem: 'Presentar ofertas de forma clara, confiable y optimizada para mobile.',
      tech: ['HTML', 'CSS', 'Responsive', 'Angular']
    },
    {
      name: 'Branding Digital',
      type: 'Identidad visual',
      image: '/assets/nido.png',
      description: 'Sistemas visuales para marcas con piezas adaptadas a redes, presentaciones y web.',
      problem: 'Desarrollo de identidad visual y comunicación en distintos canales.',
      tech: ['Figma', 'Illustrator', 'Photoshop']
    }
  ];

  experience = [
    {
      company: 'Sieteideas',
      role: 'Frontend Developer / UX/UI / PM',
      years: '+5 años',
      tasks: ['Desarrollo Angular', 'Diseño UX/UI', 'Gestión de proyectos', 'Trabajo ágil']
    },
    {
      company: 'MOI Diseño',
      role: 'Founder / Visual Designer',
      years: '+15 años',
      tasks: ['Branding', 'Diseño digital', 'Redes sociales', 'Diseño visual']
    }
  ];

}
