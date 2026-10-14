/**
 * Single source of truth for contact details, catalog and copy that the page
 * and the structured data share. Keeping it here means the JSON-LD can never
 * drift away from what the visitor reads on screen.
 */

import type { IconName } from '../components/icons';

const whatsappNumber = '528116131771';

/** Builds a wa.me deep link with the message already typed out. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function productMessage(productName: string): string {
  return `Hola, me interesa cotizar la ${productName}. ¿Me comparten precio por volumen, flete y tiempo de entrega?`;
}

export const waMessages = {
  header: 'Hola, quiero cotizar tarimas.',
  fab: 'Hola, necesito una cotización de tarimas.',
  hero: 'Hola, me interesa cotizar tarimas para envío nacional o internacional. ¿Me pasan precios por volumen y tiempos de entrega?',
  quote: 'Hola, quiero cotizar tarimas para un embarque.',
};

export const site = {
  name: 'Tarimas & Logística Pro',
  legalName: 'Tarimas y Logística Pro S.A. de C.V.',
  url: 'https://tarimaslogisticapro.com',
  tagline: 'Ningún contenedor se detiene por una tarima mal tratada',
  description:
    'Fabricamos y distribuimos tarimas de madera y plástico de alta resistencia con tratamiento térmico NIMF 15. Envíos nacionales e internacionales con trazabilidad por lote.',
  phone: {
    display: '+52 81 1613 1771',
    href: 'tel:+528116131771',
  },
  whatsapp: {
    number: whatsappNumber,
    display: '+52 81 1613 1771',
  },
  email: 'ventas@tarimaslogisticapro.com',
  address: {
    street: 'Av. Industrias del Norte 1847, Bodega 6',
    district: 'Parque Industrial Escobedo',
    city: 'Apodaca',
    state: 'Nuevo León',
    zip: '66634',
    country: 'México',
  },
  hours: [
    { days: 'Lunes a viernes', time: '8:00 a 18:00' },
    { days: 'Sábado', time: '8:00 a 13:00' },
    { days: 'Domingo', time: 'Sin operación' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tarimas-logistica-pro',
      icon: 'linkedin-logo' as IconName,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/tarimaslogisticapro',
      icon: 'facebook-logo' as IconName,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/tarimaslogisticapro',
      icon: 'instagram-logo' as IconName,
    },
  ],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Parque+Industrial+Escobedo+Apodaca+Nuevo+Le%C3%B3n',
};

export const navigation = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Productos', href: '/#productos' },
  { label: 'Cotización', href: '/#cotizacion' },
  { label: 'Contacto', href: '/#contacto' },
];

export interface Product {
  slug: string;
  name: string;
  format: string;
  summary: string;
  image: string;
  alt: string;
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: 'americana-48x40',
    name: 'Tarima estándar americana',
    format: '48 x 40 in',
    summary:
      'La medida que piden 7 de cada 10 embarques hacia Estados Unidos. Cuatro entradas para montacargas y madera de pino de segundo corte.',
    image: '/images/tarima-americana.svg',
    alt: 'Ilustración de una tarima americana de 48 por 40 pulgadas vista de frente',
    specs: [
      { label: 'Medidas', value: '1,219 x 1,016 mm' },
      { label: 'Carga dinámica', value: '1,361 kg' },
      { label: 'Tratamiento', value: 'Térmico NIMF 15' },
    ],
  },
  {
    slug: 'europallet',
    name: 'Europallet certificado',
    format: '1200 x 800 mm',
    summary:
      'Certificada EPAL y reparable pieza por pieza. La medida que exigen las cadenas de suministro europeas y los almacenes automatizados.',
    image: '/images/europallet.svg',
    alt: 'Ilustración de una tarima europea de mil doscientos por ochocientos milímetros',
    specs: [
      { label: 'Medidas', value: '1,200 x 800 mm' },
      { label: 'Carga dinámica', value: '1,500 kg' },
      { label: 'Estructura', value: '9 tacos, 3 entradas' },
    ],
  },
  {
    slug: 'plastico-alta-densidad',
    name: 'Tarima de plástico de alta densidad',
    format: '1200 x 1000 mm',
    summary:
      'HDPE virgen moldeado en una sola pieza. No absorbe humedad, se lava en planta y no necesita tratamiento fitosanitario.',
    image: '/images/tarima-plastico.svg',
    alt: 'Ilustración de una tarima de plástico de alta densidad en color gris',
    specs: [
      { label: 'Medidas', value: '1,200 x 1,000 mm' },
      { label: 'Carga estática', value: '3,750 kg' },
      { label: 'Uso', value: 'Alimentos y farmacéutica' },
    ],
  },
  {
    slug: 'a-medida',
    name: 'Tarima personalizada',
    format: 'Desde 600 x 600 mm',
    summary:
      'Diseñamos el herramental para tu producto y validamos un prototipo antes de fabricar el lote completo.',
    image: '/images/tarima-medida.svg',
    alt: 'Ilustración de una tarima fabricada a medida con medidas acotadas',
    specs: [
      { label: 'Medidas', value: 'Hasta 2,400 x 1,200 mm' },
      { label: 'Carga dinámica', value: 'Hasta 2,000 kg' },
      { label: 'Prototipo', value: '5 días hábiles' },
    ],
  },
];

export const stats = [
  { value: '1,247', label: 'embarques despachados durante 2025' },
  { value: '26', label: 'países con entregas recurrentes' },
  { value: '99.3%', label: 'de lotes entregados en la fecha comprometida' },
];

export const certifications = ['NIMF 15', 'ISO 9001:2015', 'SENASICA', 'IMMEX'];

export const steps = [
  {
    title: 'Cuéntanos el destino y el volumen',
    body: 'Nos dices la medida, la cantidad y si el embarque sale del país. Con eso ya sabemos qué tratamiento y qué empaque necesitas.',
  },
  {
    title: 'Recibes la cotización en 2 horas hábiles',
    body: 'Confirmamos existencia en patio, calculamos el flete a tu planta o puerto y te enviamos la fecha de entrega por escrito.',
  },
  {
    title: 'Fabricamos, tratamos y despachamos',
    body: 'Cada lote sale con su certificado de tratamiento térmico y un folio que puedes rastrear hasta el contenedor.',
  },
];

export const values = [
  {
    title: 'Puntualidad',
    body: 'Si la entrega está comprometida para el martes, sale el lunes por la noche. El 99.3% de nuestros lotes llegó en la fecha prometida durante 2025.',
  },
  {
    title: 'Trazabilidad',
    body: 'Cada tarima lleva folio de lote, fecha de tratamiento y nombre del responsable de calidad. Cualquier reclamo se rastrea en minutos.',
  },
  {
    title: 'Trato directo',
    body: 'Trabajas con el mismo asesor desde la cotización hasta la reposición. Sin conmutadores y sin tickets que nadie contesta.',
  },
];

export const faq = [
  {
    q: '¿Qué es el tratamiento térmico NIMF 15 y por qué lo necesito?',
    a: 'Es la norma internacional que exige calentar la madera hasta 56 grados centígrados en el núcleo durante al menos 30 minutos para eliminar plagas. Sin el sello y el certificado que emite un organismo autorizado, la aduana del país de destino puede rechazar el embarque completo. Todas nuestras tarimas de madera salen tratadas y con certificado foliado.',
  },
  {
    q: '¿En cuánto tiempo entregan un pedido de 500 tarimas?',
    a: 'Con existencia en patio, despachamos en 48 horas. Si hay que fabricarlas, el tiempo estándar es de 7 a 10 días hábiles más el traslado. Para pedidos recurrentes reservamos inventario con tu nombre y garantizamos entrega en 3 días hábiles.',
  },
  {
    q: '¿Hacen envíos internacionales?',
    a: 'Sí. Consolidamos carga completa o suelta hacia Estados Unidos, Canadá, Centroamérica y Europa. Preparamos la documentación fitosanitaria, el sello NIMF 15 y la ficha técnica que pide tu agente aduanal.',
  },
  {
    q: '¿Cuál es el pedido mínimo?',
    a: 'Para productos de catálogo el mínimo es un pallet armado, alrededor de 100 tarimas. En proyectos a medida el mínimo lo define el herramental, y siempre te lo informamos antes de fabricar el prototipo.',
  },
  {
    q: '¿Puedo exportar con tarimas usadas o reparadas?',
    a: 'Solo si ya cuentan con el sello NIMF 15 vigente y sus marcas son legibles. Nuestro taller repara, reclasifica y vuelve a marcar las tarimas que cumplen, y te entregamos el certificado del lote reparado.',
  },
  {
    q: '¿Venden tarimas de plástico para la industria alimentaria?',
    a: 'Sí. La tarima de HDPE es de una sola pieza, sin huecos donde se acumule agua y resiste el lavado con agua a presión y detergentes alcalinos. Es la opción que más nos piden plantas de alimentos, bebidas y farmacéutica.',
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Transferencia bancaria, cheque certificado y línea de crédito a 30 días para clientes con historial. Los primeros pedidos se liquidan contra entrega o con anticipación del 50%.',
  },
  {
    q: '¿Recogen las tarimas al final de su vida útil?',
    a: 'Sí. Recogemos las tarimas dañadas cuando entregamos un pedido nuevo en la misma zona. Las reparamos, y las que ya no cumplen se envían a un centro de acopio autorizado para darles un destino distinto.',
  },
];
