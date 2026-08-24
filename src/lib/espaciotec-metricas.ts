/**
 * EspacioTec 2026 · Masterclass 4 — "Ajuste producto-mercado y métricas clave".
 * Reference catalogue handed to the cohort: which signals to look at, by type
 * of business and by stage. Each metric carries a one-line "qué te dice".
 */

export type Metric = readonly [name: string, meaning: string];

export type BusinessType = {
  id: string;
  name: string;
  desc: string;
  s1: readonly Metric[];
  s2: readonly Metric[];
  s3: readonly Metric[];
};

export const STAGES = [
  { key: "s1", name: "Pre-producto", blurb: "Todavía no hay producto. Mides <b>apetito</b>." },
  { key: "s2", name: "Producto lanzado", blurb: "Ya hay gente usándolo. Mides si <b>funciona</b>." },
  { key: "s3", name: "Con ventas", blurb: "Ya entra dinero. Mides si el <b>negocio</b> funciona." },
] as const;

export const METRICS: readonly BusinessType[] = [
  { id:"saas-b2b", name:"SaaS B2B", desc:"Software vendido a empresas, normalmente por suscripción.",
    s1:[["Pilotos comprometidos por escrito","Con fecha de inicio, no «hablamos en unos meses»."],
        ["Cartas de intención de quien probó algo","Solo cuentan si vieron un prototipo o una demo real."],
        ["Problemas con presupuesto ya asignado","Si el cliente ya gasta en resolverlo, el dolor existe."]],
    s2:[["Activación","Cuántas cuentas llegan al primer momento de valor."],
        ["Uso semanal por cuenta","Por cuenta, no por usuario: quien firma y quien usa rara vez coinciden."],
        ["Profundidad","Cuántas personas del equipo cliente lo usan de verdad."]],
    s3:[["Renovación","La prueba de fuego: pagar otra vez sin que se lo pidas."],
        ["Expansión dentro de la cuenta","Más asientos, más áreas, más módulos."],
        ["Duración del ciclo de venta","Si se acorta, el mercado te está entendiendo mejor."]] },

  { id:"sub-b2c", name:"Suscripción B2C", desc:"Software o servicio de pago recurrente vendido a personas.",
    s1:[["Lista de espera con activación","Un email o un teléfono, no una visita."],
        ["Preventa o pago anticipado","La señal más fuerte que existe antes de tener producto."]],
    s2:[["Tiempo hasta el primer valor","Cuánto tarda alguien en obtener lo que vino a buscar."],
        ["Retención por cohorte","Si la curva se aplana, hay un grupo para el que esto es necesario."],
        ["Frecuencia de uso","Cada cuánto vuelven sin que les escribas."]],
    s3:[["Conversión de prueba a pago","Dónde se rompe: en el registro, en el uso o en el precio."],
        ["Churn mensual","Cuántos se van cada mes."],
        ["Ingreso recurrente","Lo que puedes contar con que llegue el mes que viene."]] },

  { id:"marketplace", name:"Marketplace", desc:"Conectas dos lados: quien ofrece y quien busca.",
    s1:[["Lista de espera de cada lado, por separado","Son dos hipótesis distintas. Nunca las sumes."],
        ["Oferta comprometida antes de abrir","Sin oferta no hay marketplace, hay una landing."]],
    s2:[["Liquidez","Qué porcentaje de las solicitudes termina en una transacción."],
        ["Tiempo hasta el primer match","Cuánto espera alguien antes de que pase algo."],
        ["Repetición del lado que escasea","El lado difícil de conseguir. Si se va, el marketplace muere."]],
    s3:[["Repetición de compradores","Que vuelvan sin campaña detrás."],
        ["Take rate sostenible","Cuánto puedes cobrar sin que se vayan por fuera."],
        ["Concentración","Qué parte del volumen depende de tus diez mayores."]] },

  { id:"ecommerce", name:"E-commerce / DTC", desc:"Vendes producto físico directo al consumidor.",
    s1:[["Preventa pagada","Alguien pagó por algo que todavía no existe."],
        ["Lista de espera con activación","Registro con dato de contacto, no visitas."]],
    s2:[["Conversión de visita a compra","Dónde se cae la gente en el camino."],
        ["Recompra","La ventana tiene que ser más larga que el ciclo de consumo del producto."],
        ["Tasa de devolución","Lo que la gente hace cuando el producto llega y no era."]],
    s3:[["Margen de contribución tras adquisición","Lo que queda después de pagar por traer al cliente."],
        ["Relación entre valor de vida y costo de adquisición","Si cuesta más traerlo de lo que deja, no hay negocio."],
        ["Frecuencia de compra","Cada cuánto vuelven por su cuenta."]] },

  { id:"app", name:"App de consumo", desc:"Aplicación gratuita o freemium para personas.",
    s1:[["Activación en una landing","Email o teléfono. Ver el anuncio no valida nada."],
        ["Lista de espera con referidos","Si comparten para adelantar puesto, el interés es real."]],
    s2:[["Retención por cohorte","La foto más clara que existe de si esto es necesario."],
        ["Frecuencia","Días activos por semana, no usuarios totales."],
        ["Tiempo hasta el primer valor","Los primeros minutos deciden casi todo."]],
    s3:[["Conversión a pago o a monetización","Qué parte del uso se convierte en ingreso."],
        ["Referidos orgánicos","Cuántos llegan porque alguien los mandó."],
        ["Ingreso por usuario activo","Lo que deja cada persona que de verdad usa."]] },

  { id:"hardware", name:"Hardware / dispositivo", desc:"Producto físico con componente técnico o electrónico.",
    s1:[["Preventas pagadas","Pagadas. Una reserva gratis es otra cosa completamente distinta."],
        ["Cartas de intención de distribuidores","Quien va a moverlo, no quien va a usarlo."]],
    s2:[["Uso después del primer mes","Pasada la novedad es cuando se sabe."],
        ["Tasa de devolución","La señal más honesta de expectativa contra realidad."],
        ["Incidencias por unidad","Cuántos fallan, y por qué."]],
    s3:[["Margen unitario","Cuánto deja cada unidad después de fabricarla y entregarla."],
        ["Recompra o consumibles","Lo que convierte una venta única en un negocio recurrente."],
        ["Costo de garantía","El que se come el margen sin que lo veas venir."]] },

  { id:"servicios", name:"Servicios y consultoría", desc:"Vendes trabajo experto, por proyecto o por retainer.",
    s1:[["Clientes que pagan un diagnóstico pequeño","Pagar poco es infinitamente más que no pagar nada."]],
    s2:[["Recontratación","Que vuelvan a contratarte cuando termina el proyecto."],
        ["Ampliación del alcance","Que te pidan más de lo que habían contratado."]],
    s3:[["% de ingreso de clientes recurrentes","Cuánto de tu facturación no depende de vender de cero."],
        ["Referidos de clientes","El canal más barato que existe en servicios."],
        ["Margen por proyecto","No las horas: lo que queda después de las horas."]] },

  { id:"credito", name:"Fintech · crédito", desc:"Prestas dinero, propio o de terceros.",
    s1:[["Solicitudes completadas por gente que califica","Completadas y que califican. Las otras no cuentan."],
        ["Costo actual del problema","Qué está pagando hoy esa persona por financiarse de otra forma."]],
    s2:[["Conversión a primer desembolso","Cuántos aprobados terminan tomando el crédito."],
        ["Mora temprana por cohorte de originación","Por cohorte: mezclar meses esconde el deterioro."]],
    s3:[["Repetición de uso","Que vuelvan a pedir y a pagar."],
        ["Pérdida esperada contra pérdida real","Si tu modelo predice, tienes negocio."],
        ["Costo de adquisición por cliente que paga","No por solicitud: por cliente que efectivamente devuelve."]] },

  { id:"pagos", name:"Fintech · pagos", desc:"Procesas o mueves dinero entre partes.",
    s1:[["Comercios que aceptan probar","Con una transacción real, aunque sea una."]],
    s2:[["Transacciones por comercio activo","El promedio esconde todo: mira la distribución."],
        ["Tasa de aprobación","Cuántos intentos terminan en un pago exitoso."],
        ["Comercios que siguen activos al mes","Instalar no es usar, tampoco aquí."]],
    s3:[["Volumen procesado por comercio","Si crece, te están dando más de su negocio."],
        ["Retención de comercios","El churn de comercios es más caro que el de usuarios."],
        ["Take rate neto","Después de costos de red y de fraude."]] },

  { id:"edtech", name:"Edtech", desc:"Formación, capacitación o herramientas educativas.",
    s1:[["Inscripciones pagadas, aunque sean pocas","Diez que pagan dicen más que mil interesados."]],
    s2:[["Terminación","Inscribirse es marketing. Terminar es producto."],
        ["Asistencia sostenida","No la primera sesión: la cuarta."],
        ["Progreso real","Que el alumno pueda hacer algo que antes no podía."]],
    s3:[["Recompra del siguiente curso","La señal de que aprendieron algo que valía."],
        ["Referidos","En educación, casi todo el crecimiento bueno es boca a boca."],
        ["Retención de suscripción","Si el modelo es recurrente."]] },

  { id:"healthtech", name:"Healthtech", desc:"Producto o servicio de salud, clínico o de bienestar.",
    s1:[["Profesionales dispuestos a probarlo en su práctica real","En su consulta, con sus pacientes. No en una demo."]],
    s2:[["Uso repetido en la consulta","Que se vuelva parte del flujo de trabajo."],
        ["Adherencia del paciente","Cuántos siguen el tratamiento o el uso indicado."]],
    s3:[["Contrato institucional","Clínica, aseguradora o sistema: es donde está el dinero."],
        ["Retención a seis meses","Los ciclos en salud son largos; las ventanas cortas engañan."]] },

  { id:"agtech", name:"Agtech", desc:"Tecnología o servicios para producción agrícola.",
    s1:[["Productores que ceden una parcela para prueba","Ceder tierra es un costo real. Por eso vale."]],
    s2:[["Repetición en la siguiente temporada","El ciclo agrícola es tu unidad de tiempo, no el mes."],
        ["Superficie bajo uso","Cuántas hectáreas realmente pasaron por el producto."]],
    s3:[["Superficie contratada","Comprometida y pagada."],
        ["Renovación anual","Una temporada más es la prueba."],
        ["Resultado por hectárea","Rendimiento, ahorro o pérdida evitada, medido."]] },

  { id:"logistica", name:"Logística y última milla", desc:"Mueves cosas de un punto a otro.",
    s1:[["Envíos reales, aunque los operes a mano","Con WhatsApp y una hoja de cálculo cuenta igual."]],
    s2:[["Cumplimiento de la promesa de entrega","Qué porcentaje llega cuando dijiste que llegaría."],
        ["Repetición del mismo cliente","Que vuelvan a mandarte el siguiente envío."]],
    s3:[["Densidad por ruta","Cuántas entregas por viaje: es lo que hace o rompe el margen."],
        ["Costo por entrega","Y sobre todo, si baja al crecer."],
        ["Margen por envío","Después de combustible, tiempo y devoluciones."]] },

  { id:"medios", name:"Medios y contenido", desc:"Newsletter, podcast, publicación o comunidad.",
    s1:[["Suscriptores con activación","Un email dado, no un seguidor."]],
    s2:[["Lectura o escucha repetida","No alcance: cuántos vuelven a la siguiente entrega."],
        ["Retención de suscripción","Cuántos siguen ahí a los tres meses."],
        ["Respuestas y participación","Que alguien conteste es una señal fortísima."]],
    s3:[["Conversión a pago","De audiencia a suscriptor que paga."],
        ["Ingreso por suscriptor","Publicidad, suscripción o producto, sumado."],
        ["Churn","Cuántos cancelan cada mes."]] },

  { id:"impacto", name:"Impacto", desc:"El resultado social o ambiental es parte del producto.",
    s1:[["Beneficiarios que aceptan participar y completan","Aceptar es fácil; completar es la señal."]],
    s2:[["Un KPI de resultado, cuantificado","De resultado, no de actividad. Personas alcanzadas es actividad."],
        ["Persistencia del cambio","Que el efecto siga cuando tú te vas."]],
    s3:[["Quién paga por ese resultado","Un resultado que nadie financia es un proyecto, no un negocio."],
        ["Renovación del financiador","La prueba de que el impacto se creyó."],
        ["Costo por unidad de impacto","Lo que permite comparar contra cualquier alternativa."]] }
] as const;
