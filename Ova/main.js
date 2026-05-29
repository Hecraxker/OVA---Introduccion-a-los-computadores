
(function () {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const d = document.documentElement;
    const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  });
})();

(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
  );
  els.forEach(el => obs.observe(el));
})();

(function () {
  const links = document.querySelectorAll('.nav-links a');
  const page = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === page) a.classList.add('active');
  });
})();

const componentsData = [
  {
    icon: '🔲', name: 'CPU',
    title: 'CPU — Procesador Central',
    desc: 'La Unidad Central de Procesamiento (Central Processing Unit) es el componente más esencial del computador. Ejecuta instrucciones de programas, realiza operaciones aritméticas y lógicas, y coordina la comunicación entre los demás componentes. Funciona en ciclos de reloj medidos en gigahercios (GHz): en cada ciclo puede ejecutar una o varias instrucciones. Los procesadores modernos tienen múltiples núcleos (cores) que permiten ejecutar varios procesos en paralelo.',
    specs: [
      ['Velocidad de reloj', '3.0 – 5.8 GHz'],
      ['Núcleos (cores)', '4 – 64 (consumidor)'],
      ['Caché L3', '16 – 192 MB'],
      ['Proceso de fabricación', '3 – 7 nm'],
      ['TDP típico', '65 – 253 W'],
      ['Fabricantes líderes', 'Intel, AMD'],
    ],
    fact: 'Un procesador moderno de gama alta puede ejecutar más de 100.000 millones de instrucciones por segundo (100 GIPS).'
  },
  {
    icon: '💽', name: 'RAM',
    title: 'RAM — Memoria Principal',
    desc: 'La memoria RAM (Random Access Memory) es la memoria de trabajo del sistema. Almacena temporalmente los datos e instrucciones que la CPU necesita con frecuencia inmediata. Es volátil: al cortar la energía, pierde todo su contenido. Cuanta más RAM, más programas y datos pueden mantenerse activos simultáneamente sin recurrir al almacenamiento lento. La generación actual DDR5 duplica el ancho de banda respecto a DDR4.',
    specs: [
      ['Tecnología actual', 'DDR5'],
      ['Velocidad de transferencia', '4800 – 7200 MT/s'],
      ['Capacidades comunes', '8, 16, 32, 64 GB'],
      ['Latencia CAS', 'CL30 – CL36'],
      ['Voltaje', '1.1 V (DDR5)'],
      ['Tipo de montaje', 'DIMM / SO-DIMM'],
    ],
    fact: 'La RAM es entre 10 y 50 veces más rápida que un SSD NVMe moderno en latencia de acceso aleatorio.'
  },
  {
    icon: '🖴', name: 'Almacenamiento',
    title: 'SSD / HDD — Almacenamiento',
    desc: 'El almacenamiento secundario guarda permanentemente el sistema operativo, aplicaciones y datos personales. Los HDD (Hard Disk Drive) usan discos magnéticos giratorios y son lentos pero baratos y de gran capacidad. Los SSD (Solid State Drive) usan chips de memoria flash NAND sin partes móviles, son mucho más rápidos, silenciosos y resistentes a golpes, pero costaron históricamente más por GB.',
    specs: [
      ['SSD NVMe PCIe 4.0', '3,500 – 7,400 MB/s'],
      ['SSD NVMe PCIe 5.0', 'hasta 14,000 MB/s'],
      ['HDD moderno', '100 – 250 MB/s'],
      ['Capacidades SSD', '256 GB – 4 TB'],
      ['Capacidades HDD', '500 GB – 20 TB'],
      ['Durabilidad SSD', '600 – 3,600 TBW'],
    ],
    fact: 'El primer HDD comercial (IBM 350, 1956) almacenaba 5 MB y pesaba más de una tonelada.'
  },
  {
    icon: '🖥', name: 'GPU',
    title: 'GPU — Tarjeta Gráfica',
    desc: 'La Unidad de Procesamiento Gráfico fue diseñada para renderizar imágenes y video en tiempo real. A diferencia de la CPU (pocos núcleos muy potentes), la GPU tiene miles de núcleos pequeños especializados en cálculos paralelos masivos. Hoy es indispensable no solo para gaming y diseño 3D, sino también para entrenar modelos de inteligencia artificial y aprendizaje automático.',
    specs: [
      ['Núcleos CUDA (gama alta)', '4,096 – 18,176'],
      ['VRAM', '8 – 80 GB'],
      ['Ancho de banda memoria', '400 – 3,350 GB/s'],
      ['API gráficas', 'DirectX 12, Vulkan, OpenGL'],
      ['TDP gama alta', '300 – 700 W'],
      ['Fabricantes', 'NVIDIA, AMD, Intel Arc'],
    ],
    fact: 'La GPU NVIDIA H100 usada para entrenar IA tiene 80 GB de memoria y 3,350 GB/s de ancho de banda.'
  },
  {
    icon: '🔌', name: 'Placa Madre',
    title: 'Placa Madre (Motherboard)',
    desc: 'La placa madre es el circuito impreso principal que interconecta todos los componentes del sistema. Define la compatibilidad de procesadores, memorias y periféricos. Contiene el chipset (controladora lógica), ranuras de expansión PCIe, puertos SATA y M.2 para almacenamiento, conectores USB, audio integrado, red Ethernet y, en muchos casos, Wi-Fi. Cada "socket" de CPU es específico para una familia de procesadores.',
    specs: [
      ['Formatos', 'ATX, Micro-ATX, Mini-ITX'],
      ['Sockets Intel actuales', 'LGA1700 (13ª/14ª gen)'],
      ['Sockets AMD actuales', 'AM5 (Ryzen 7000)'],
      ['PCIe máximo', 'PCIe 5.0 x16'],
      ['Ranuras RAM', '2 – 4 DIMM (DDR5)'],
      ['Chipsets tope de gama', 'Z790 (Intel), X670E (AMD)'],
    ],
    fact: 'La placa madre fue concebida en la arquitectura IBM PC/AT de 1984, aunque el término "motherboard" data de ese diseño.'
  },
  {
    icon: '⚡', name: 'Fuente de poder',
    title: 'PSU — Fuente de Poder',
    desc: 'La fuente de poder (Power Supply Unit) convierte la corriente alterna (AC) de 110-240 V de la red eléctrica en corriente continua (DC) a los voltajes que necesitan los componentes: +12 V, +5 V y +3.3 V. Su eficiencia determina cuánta energía se desperdicia como calor. La certificación 80 Plus garantiza mínimo 80% de eficiencia; el nivel Titanium supera el 92% a carga completa.',
    specs: [
      ['Potencias comunes', '550 – 1,600 W'],
      ['Certificaciones 80 Plus', 'Bronze / Gold / Platinum / Titanium'],
      ['Eficiencia Gold', '87 – 90%'],
      ['Conector ATX principal', '24 pines'],
      ['Conector CPU', '8 o 16 pines EPS12V'],
      ['Tipos', 'Modular, Semi-modular, No modular'],
    ],
    fact: 'Una PSU Gold de 750 W desperdicia unos 75 W en calor. Una Titanium de igual potencia desperdiciaría menos de 50 W.'
  },
];

(function initComponentsExplorer() {
  const nav = document.getElementById('compNav');
  const panel = document.getElementById('compPanel');
  if (!nav || !panel) return;

  function renderPanel(c) {
    panel.innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <table class="spec-table">
        ${c.specs.map(([l, v]) => `<tr><td>${l}</td><td>${v}</td></tr>`).join('')}
      </table>
      <div class="comp-fun-fact">
        <span>Dato curioso</span>
        <p>${c.fact}</p>
      </div>`;
  }

  componentsData.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'comp-tab' + (i === 0 ? ' active' : '');
    btn.innerHTML = `<span class="comp-tab-icon">${c.icon}</span>${c.name}`;
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.comp-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPanel(c);
    });
    nav.appendChild(btn);
  });

  renderPanel(componentsData[0]);
})();

/* ══════════════════════════════════════
   QUIZ — sólo se ejecuta en quiz.html
   ══════════════════════════════════════ */
const quizData = [
  {
    q: '¿Cuál es la función principal de la CPU?',
    opts: [
      'Almacenar permanentemente los datos del usuario',
      'Ejecutar instrucciones y coordinar todos los componentes',
      'Mostrar imágenes en el monitor',
      'Convertir corriente alterna en corriente continua'
    ],
    ans: 1,
    exp: 'La CPU (Unidad Central de Procesamiento) ejecuta las instrucciones del software y coordina el funcionamiento de todos los demás componentes del sistema.'
  },
  {
    q: '¿Qué característica distingue a la RAM de un SSD?',
    opts: [
      'La RAM es más lenta que el SSD',
      'La RAM retiene su contenido al apagar el equipo',
      'La RAM es volátil: pierde su contenido sin energía eléctrica',
      'La RAM almacena el sistema operativo permanentemente'
    ],
    ans: 2,
    exp: 'La RAM es memoria volátil: su contenido desaparece al cortar la energía. El SSD es no-volátil y mantiene los datos aunque se apague el equipo.'
  },
  {
    q: '¿En qué sistema numérico opera internamente el hardware de un computador?',
    opts: ['Decimal (base 10)', 'Hexadecimal (base 16)', 'Octal (base 8)', 'Binario (base 2)'],
    ans: 3,
    exp: 'A nivel de hardware, los computadores procesan exclusivamente datos en binario (0 y 1), que corresponden a estados de voltaje alto y bajo en los transistores.'
  },
  {
    q: '¿Quién formalizó matemáticamente el concepto de computación en 1936?',
    opts: ['Charles Babbage', 'John von Neumann', 'Alan Turing', 'Ada Lovelace'],
    ans: 2,
    exp: 'Alan Turing publicó en 1936 "On Computable Numbers", donde definió la máquina de Turing y estableció los fundamentos teóricos de la computación.'
  },
  {
    q: '¿Qué ventaja principal tienen los SSD NVMe sobre los HDD tradicionales?',
    opts: [
      'Mayor capacidad máxima de almacenamiento',
      'Velocidades de lectura/escritura muy superiores (hasta 70×)',
      'Menor precio por gigabyte almacenado',
      'Mayor compatibilidad con sistemas heredados'
    ],
    ans: 1,
    exp: 'Un SSD NVMe PCIe 4.0 alcanza ~7,400 MB/s, mientras un HDD ronda los 150-200 MB/s. La ventaja en velocidad es de 30-70 veces mayor.'
  },
  {
    q: '¿Por qué las GPU son útiles para entrenar modelos de inteligencia artificial?',
    opts: [
      'Porque tienen mayor frecuencia de reloj que las CPU',
      'Porque consumen menos energía que las CPU',
      'Porque tienen miles de núcleos pequeños para cálculo paralelo masivo',
      'Porque incluyen memoria RAM de gran capacidad'
    ],
    ans: 2,
    exp: 'Las GPU cuentan con miles de núcleos especializados en operaciones matemáticas simples realizadas en paralelo, ideal para multiplicaciones matriciales que requiere el entrenamiento de redes neuronales.'
  },
  {
    q: '¿Cuántos bits equivale un byte?',
    opts: ['4 bits', '8 bits', '16 bits', '32 bits'],
    ans: 1,
    exp: '1 byte = 8 bits. Esta es la unidad estándar de información digital. Un carácter de texto (ASCII) ocupa 1 byte; un carácter Unicode puede ocupar 1-4 bytes.'
  },
  {
    q: '¿Cuál fue el primer microprocesador comercial fabricado en un solo chip?',
    opts: ['Intel 8086', 'Intel Pentium', 'Intel 4004', 'Motorola 68000'],
    ans: 2,
    exp: 'El Intel 4004 (noviembre de 1971) fue el primer microprocesador de uso general integrado en un único chip de silicio. Operaba a 740 kHz y procesaba datos de 4 bits.'
  },
  {
    q: '¿Qué componente interconecta físicamente todos los demás componentes del PC?',
    opts: ['Fuente de poder', 'Placa madre', 'Disco duro', 'Tarjeta de red'],
    ans: 1,
    exp: 'La placa madre (motherboard) es el circuito impreso principal. Contiene los sockets para CPU, ranuras para RAM, conectores de almacenamiento y ranuras de expansión que unen todos los componentes.'
  },
  {
    q: '¿Qué mide la certificación "80 Plus" de una fuente de poder?',
    opts: [
      'La potencia máxima que puede entregar',
      'El número de conectores disponibles',
      'La eficiencia energética en la conversión AC→DC',
      'La compatibilidad con distintos voltajes de red'
    ],
    ans: 2,
    exp: 'La certificación 80 Plus garantiza que la PSU convierte al menos el 80% de la energía AC consumida en DC útil. Los niveles Gold, Platinum y Titanium alcanzan 87-96% de eficiencia.'
  },
  {
    q: '¿Qué es el "chipset" en una placa madre?',
    opts: [
      'Un procesador auxiliar que gestiona las comunicaciones entre componentes',
      'El conjunto de ranuras RAM de la placa',
      'Los condensadores que regulan el voltaje',
      'El conector principal de alimentación ATX'
    ],
    ans: 0,
    exp: 'El chipset es un conjunto de circuitos integrados en la placa madre que gestiona la comunicación entre la CPU, la RAM, el almacenamiento y los periféricos. Define en buena medida las capacidades de la placa.'
  },
  {
    q: '¿Qué arquitectura de computador, propuesta en 1945, describe la mayoría de PC modernos?',
    opts: ['Arquitectura Harvard', 'Arquitectura Von Neumann', 'Arquitectura RISC-V', 'Arquitectura ARM'],
    ans: 1,
    exp: 'La arquitectura Von Neumann (1945) describe un computador con CPU, memoria unificada para datos e instrucciones, y unidades de entrada/salida. Es el modelo base de casi todos los computadores actuales.'
  },
];

(function initQuiz() {
  const card = document.getElementById('quizCard');
  if (!card) return; // no estamos en quiz.html

  let current = 0, score = 0, answered = false;

  const progressFill  = document.getElementById('quizProgressFill');
  const progressLabel = document.getElementById('quizProgressLabel');

  function updateProgress() {
    const pct = (current / quizData.length) * 100;
    if (progressFill)  progressFill.style.width = pct + '%';
    if (progressLabel) progressLabel.textContent = `Pregunta ${Math.min(current + 1, quizData.length)} de ${quizData.length}`;
  }

  const LETTERS = ['A', 'B', 'C', 'D'];

  function renderQuestion() {
    if (current >= quizData.length) { showResult(); return; }
    answered = false;
    updateProgress();
    const q = quizData[current];
    card.innerHTML = `
      <span class="q-num">Pregunta ${current + 1} / ${quizData.length}</span>
      <div class="q-text">${q.q}</div>
      <div class="q-options">
        ${q.opts.map((o, i) => `
          <button class="q-opt" onclick="selectAnswer(${i})">
            <span class="q-opt-letter">${LETTERS[i]}</span>
            ${o}
          </button>`).join('')}
      </div>
      <div class="q-feedback" id="fb"></div>
      <div class="quiz-actions">
        <span class="score-display">Aciertos: ${score} / ${current}</span>
        <button class="btn btn-primary" id="nextBtn" onclick="nextQuestion()" style="display:none">
          ${current < quizData.length - 1 ? 'Siguiente pregunta →' : 'Ver resultado →'}
        </button>
      </div>`;
  }

  window.selectAnswer = function (i) {
    if (answered) return;
    answered = true;
    const q = quizData[current];
    const opts = card.querySelectorAll('.q-opt');
    opts.forEach(o => o.classList.add('disabled'));
    opts[i].classList.add(i === q.ans ? 'correct' : 'wrong');
    if (i !== q.ans) opts[q.ans].classList.add('correct');
    if (i === q.ans) score++;

    const fb = document.getElementById('fb');
    fb.className = 'q-feedback show ' + (i === q.ans ? 'ok' : 'fail');
    fb.innerHTML = `<strong>${i === q.ans ? '✓ Correcto' : '✗ Incorrecto'}</strong>${q.exp}`;
    document.getElementById('nextBtn').style.display = 'inline-block';
  };

  window.nextQuestion = function () { current++; renderQuestion(); };

  function showResult() {
    if (progressFill) progressFill.style.width = '100%';
    if (progressLabel) progressLabel.textContent = 'Completado';
    const pct = Math.round((score / quizData.length) * 100);
    let msg;
    if (pct >= 90) msg = 'Excelente dominio del tema. ¡Resultado sobresaliente!';
    else if (pct >= 70) msg = 'Buen trabajo. Hay algunos conceptos que puedes reforzar revisando el material.';
    else if (pct >= 50) msg = 'Resultado aceptable. Te recomendamos repasar las secciones de Componentes e Historia.';
    else msg = 'Necesitas repasar el contenido del OVA antes de volver a intentarlo.';

    card.innerHTML = `
      <div class="result-card">
        <div class="result-score-big">${score}/${quizData.length}</div>
        <div class="result-pct">${pct}% de respuestas correctas</div>
        <p class="result-msg">${msg}</p>
        <div class="result-breakdown">
          <div class="rb-item"><div class="rb-num" style="color:var(--green)">${score}</div><div class="rb-label">Correctas</div></div>
          <div class="rb-item"><div class="rb-num" style="color:var(--red)">${quizData.length - score}</div><div class="rb-label">Incorrectas</div></div>
          <div class="rb-item"><div class="rb-num">${pct}%</div><div class="rb-label">Porcentaje</div></div>
        </div>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="restartQuiz()">Reintentar evaluación</button>
          <a href="index.html" class="btn btn-outline">← Volver al OVA</a>
        </div>
      </div>`;
  }

  window.restartQuiz = function () { current = 0; score = 0; renderQuestion(); };

  renderQuestion();
})();
