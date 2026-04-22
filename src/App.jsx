import { useEffect } from "react";
import Chart from "chart.js/auto";

const markup = `
<div class="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl hidden-menu flex flex-col pt-32 px-8 border-b border-slate-100" id="mobile-menu">
  <button class="absolute top-8 right-6 text-slate-500 hover:text-slate-900" id="close-menu"><span class="iconify w-8 h-8" data-icon="solar:close-circle-linear"></span></button>
  <nav class="flex flex-col gap-8 text-2xl font-medium tracking-tight">
    <a class="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4" href="#problema">O Problema</a>
    <a class="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4" href="#solucao">Como Funciona</a>
    <a class="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4" href="#seguranca">Segurança</a>
    <a class="hover:text-teal-600 transition-colors border-b border-slate-100 pb-4" href="#demo">Demonstração</a>
  </nav>
</div>
<div class="fixed inset-0 z-0 pointer-events-none">
  <div class="absolute top-[-10%] right-[-10%] w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] bg-sky-50 rounded-full blur-[80px] lg:blur-[120px] opacity-60"></div>
  <div class="absolute bottom-[-10%] left-[-10%] w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] bg-teal-50 rounded-full blur-[80px] lg:blur-[120px] opacity-60"></div>
</div>
<nav class="relative z-50 w-full h-[80px] lg:h-[100px] flex items-center justify-between px-6 lg:px-[6%] border-b border-slate-100 bg-white/70 backdrop-blur-md animate-reveal sticky top-0">
  <div class="flex items-center gap-3">
    <div class="w-8 h-8 bg-teal-50 text-teal-600 rounded flex items-center justify-center"><span class="iconify w-5 h-5" data-icon="solar:add-square-linear"></span></div>
    <span class="text-lg font-semibold tracking-tight text-slate-900">Maria <span class="text-teal-600">AI</span></span>
  </div>
  <div class="hidden md:flex text-sm font-medium text-slate-500 gap-x-8 items-center">
    <a class="hover:text-slate-900 transition-colors" href="#problema">O Problema</a>
    <a class="hover:text-slate-900 transition-colors" href="#solucao">Como Funciona</a>
    <a class="hover:text-slate-900 transition-colors" href="#seguranca">Protocolos</a>
    <a class="hover:text-slate-900 transition-colors" href="#demo">Demo</a>
  </div>
  <div class="flex items-center gap-4">
    <a class="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white py-2.5 px-5 rounded hover:bg-slate-800 transition-all shadow-md shadow-slate-200 hover:shadow-lg" href="#demo">Agendar Demonstração</a>
    <button class="md:hidden text-slate-600 hover:text-slate-900 transition-colors" id="open-menu"><span class="iconify w-6 h-6" data-icon="solar:hamburger-menu-linear"></span></button>
  </div>
</nav>
<section class="z-10 w-full relative overflow-hidden">
  <div class="absolute inset-0 -z-10">
    <img src="/fundo-hero.png" alt="Fundo hero" class="w-full h-full object-cover opacity-85" />
    <div class="absolute inset-0 bg-white/35"></div>
  </div>
  <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
  <div class="max-w-[1600px] mx-auto px-6 lg:px-[6%] pt-14 pb-12 lg:pt-20 lg:pb-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
      <div class="lg:col-span-7 flex flex-col justify-center lg:justify-start lg:pt-10 min-h-[420px] lg:min-h-[620px]">
        <h1 class="sm:text-6xl md:text-7xl lg:text-[4rem] xl:text-[4.5rem] leading-[0.95] text-5xl font-semibold text-slate-900 tracking-tight">
          <span class="block animate-reveal delay-100">O crescimento do seu</span>
          <span class="block text-slate-500 animate-reveal delay-200">consultório</span>
          <span class="block text-teal-600 animate-reveal delay-300">não pode dormir.</span>
        </h1>
        <p class="animate-reveal delay-300 mt-8 text-slate-700 max-w-2xl text-base lg:text-lg leading-relaxed">
          A Maria é um sistema de automação com inteligência artificial para clínicas odontológicas.
          Ela atende, qualifica e agenda pacientes 24/7, reduzindo perdas no WhatsApp e aumentando a conversão da recepção.
        </p>
        <div class="animate-reveal delay-500 mt-8">
          <a href="#demo" class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white py-3 px-6 rounded hover:bg-slate-800 transition-all shadow-md shadow-slate-200 hover:shadow-lg">
            Agendar Demonstração Gratuita
          </a>
        </div>
      </div>
      <div class="lg:col-span-5 flex flex-col">
        <div class="relative w-full h-[320px] sm:h-[420px] lg:h-[440px] border border-slate-100 overflow-hidden group animate-reveal delay-200 bg-white/80">
          <img alt="Medical Lab" class="group-hover:scale-105 transition-transform duration-1000 ease-out w-full h-full object-cover" src="/assets/9f023d8e-7464-4eea-9789-18f1b0_f8655a97e45a.webp" />
        </div>
        <div class="p-6 bg-white border border-t-0 border-slate-100 shadow-lg shadow-slate-200/40 animate-reveal delay-300 min-h-[160px]">
          <div class="flex items-center gap-2 text-teal-600 mb-2">
            <span class="iconify w-4 h-4" data-icon="solar:user-check-linear"></span><span class="text-[10px] font-semibold uppercase tracking-widest">Fluxo IA</span>
          </div>
          <h3 class="text-2xl font-semibold leading-tight tracking-tight text-slate-900">1 Agendamento Concluído</h3>
          <p class="text-slate-500 text-sm mt-2">1 conversa convertida em consulta sem ação manual da recepção.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="problema" class="w-full relative z-10 bg-white border-b border-slate-100 overflow-hidden">
  <div class="lg:px-[6%] lg:py-32 max-w-[1600px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div class="relative z-10 scroll-reveal">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-6">
          O funil de captação <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">está furado.</span>
        </h2>
        <p class="text-slate-500 text-lg leading-relaxed">
          Cada minuto sem resposta no WhatsApp é uma consulta indo para o concorrente.
          A velocidade de atendimento define quem lota a agenda.
        </p>
      </div>
      <div class="relative group scroll-reveal delay-200">
        <div class="relative bg-white border border-slate-200 rounded-sm p-6 lg:p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-teal-100">
          <div class="w-full h-[320px]"><canvas id="recoveryChart"></canvas></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="w-full relative z-10 bg-slate-50/50 border-b border-slate-100">
  <div class="lg:px-[6%] max-w-[1600px] mr-auto ml-auto pt-16 pr-6 pb-20 pl-6 relative">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="scroll-reveal delay-100 bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
        <div class="text-5xl font-semibold tracking-tight text-slate-900 mb-4">391%</div>
        <p class="text-slate-600 leading-relaxed">
          É o aumento na chance de conversão quando você responde em até <strong>1 minuto</strong>.
          No digital, velocidade é o fator determinante entre o agendamento e o esquecimento.
        </p>
        <div class="mt-6 text-xs font-mono uppercase tracking-widest text-slate-400">Velocify Research</div>
      </div>
      <div class="scroll-reveal delay-200 bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
        <div class="text-5xl font-semibold tracking-tight text-slate-900 mb-4">40%</div>
        <p class="text-slate-600 leading-relaxed">
          Dos agendamentos em clínicas odontológicas, são solicitados <strong>fora do horário comercial</strong>.
          Sem atendimento 24/7, sua clínica ignora quase metade das oportunidades.
        </p>
        <div class="mt-6 text-xs font-mono uppercase tracking-widest text-slate-400">Dental Marketing Insights</div>
      </div>
      <div class="scroll-reveal delay-300 bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
        <div class="text-5xl font-semibold tracking-tight text-slate-900 mb-4">78%</div>
        <p class="text-slate-600 leading-relaxed">
          Dos pacientes escolhem a <strong>primeira clínica</strong> que responde com clareza.
          No digital, quem responde primeiro não apenas atende, mas conquista o paciente.
        </p>
        <div class="mt-6 text-xs font-mono uppercase tracking-widest text-slate-400">LeadConnect Survey Research</div>
      </div>
    </div>
  </div>
</section>
<section id="solucao" class="lg:py-32 bg-slate-50/50 w-full z-10 border-slate-100 border-t pt-24 pb-24 relative">
  <div class="relative z-10 lg:px-[6%] max-w-[1600px] mr-auto ml-auto pr-6 pl-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <div class="lg:col-span-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="lg:text-7xl text-4xl font-medium text-slate-900 tracking-tight mb-8 scroll-reveal text-center">Como a Maria atua <span class="text-slate-300">na prática.</span></h2>
          <p class="text-lg text-slate-500 font-light leading-relaxed max-w-3xl mx-auto text-center">Atendimento inicial, qualificação inteligente, agendamento e inteligência de dados em uma única camada operacional para sua clínica.</p>
        </div>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        <div class="scroll-reveal delay-100 border border-slate-200 rounded-sm bg-white p-6 text-center min-h-[150px] flex flex-col justify-center">
          <h3 class="text-slate-900 font-semibold mb-2">Captação e Agendamento 24/7</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Responde em segundos e converte interesse em consulta, mesmo fora do horário comercial.</p>
        </div>
        <div class="scroll-reveal delay-200 border border-slate-200 rounded-sm bg-white p-6 text-center min-h-[150px] flex flex-col justify-center">
          <h3 class="text-slate-900 font-semibold mb-2">Base de Conhecimento Clínica</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Padroniza informações sobre procedimentos, convênios e preparo com consistência.</p>
        </div>
        <div class="scroll-reveal delay-300 border border-slate-200 rounded-sm bg-white p-6 text-center min-h-[150px] flex flex-col justify-center">
          <h3 class="text-slate-900 font-semibold mb-2">Retornos e Revisões</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Agenda automaticamente manutenções ortodônticas e revisões periódicas.</p>
        </div>
        <div class="scroll-reveal delay-500 border border-slate-200 rounded-sm bg-white p-6 text-center min-h-[150px] flex flex-col justify-center">
          <h3 class="text-slate-900 font-semibold mb-2">Inteligencia de Dados</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Mostra gargalos, picos de demanda e principais objeções com dados reais.</p>
        </div>
        </div>
      </div>
      <div class="lg:col-span-4 w-full mx-auto overflow-visible scroll-reveal self-start lg:mt-0">
        <div class="w-full flex items-stretch justify-center gap-4">
          <div class="w-full max-w-[285px] aspect-[9/19.5]">
            <iframe
              id="phone-animation-frame"
              title="Animacao de atendimento no celular"
              src="/phone-chat/index.html"
              class="w-full h-full border-0 bg-transparent"
              loading="lazy"
            ></iframe>
          </div>
          <div class="hidden lg:flex flex-col items-center gap-3 self-stretch">
            <div class="w-[5px] h-full bg-slate-200/80 rounded-full relative overflow-hidden" role="progressbar" aria-label="Progresso da animação" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" id="phone-animation-progress">
              <span id="phone-animation-progress-fill" class="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-teal-500 to-teal-300 rounded-full transition-all duration-300"></span>
            </div>
            <button id="phone-animation-restart" class="w-7 h-7 rounded-full border border-slate-200 bg-white text-slate-500 hover:text-teal-600 hover:border-teal-200 transition-colors flex items-center justify-center" aria-label="Reiniciar animação">
              <span class="iconify w-4 h-4" data-icon="solar:restart-linear"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
<section id="seguranca" class="overflow-hidden lg:py-32 w-full z-20 pt-24 pb-24 relative bg-white">
  <div class="lg:px-[6%] max-w-[1600px] z-10 mr-auto ml-auto pr-6 pl-6 relative">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-8">
      <div class="lg:col-span-12 flex flex-col gap-6 text-center">
        <h2 class="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight scroll-reveal">Segurança e ética de protocolo.</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border border-red-100 bg-red-50/50 rounded-sm p-6 scroll-reveal delay-100 text-center">
            <p class="text-[10px] uppercase font-bold tracking-widest text-red-600 mb-3">Bloqueado</p>
            <h3 class="font-semibold text-slate-900 mb-2">Sem diagnóstico médico</h3>
            <p class="text-slate-600 text-sm">A IA não faz diagnóstico e não define tratamento individualizado.</p>
          </div>
          <div class="border border-red-100 bg-red-50/50 rounded-sm p-6 scroll-reveal delay-200 text-center">
            <p class="text-[10px] uppercase font-bold tracking-widest text-red-600 mb-3">Bloqueado</p>
            <h3 class="font-semibold text-slate-900 mb-2">Sem casos complexos</h3>
            <p class="text-slate-600 text-sm">Casos cirúrgicos ou de alta complexidade são direcionados ao time humano.</p>
          </div>
          <div class="border border-red-100 bg-red-50/50 rounded-sm p-6 scroll-reveal delay-300 text-center">
            <p class="text-[10px] uppercase font-bold tracking-widest text-red-600 mb-3">Bloqueado</p>
            <h3 class="font-semibold text-slate-900 mb-2">Urgências com prioridade humana</h3>
            <p class="text-slate-600 text-sm">Dor aguda e emergência odontológica são escaladas imediatamente.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="demo" class="z-20 w-full border-t border-slate-100 relative bg-white">
  <div class="lg:px-[6%] max-w-[1600px] mr-auto ml-auto pr-6 pl-6 pt-24 pb-24">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-xs font-mono text-slate-500 uppercase mb-8">Demonstração</h3>
      <h2 class="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Transforme a recepção da sua clínica.</h2>
      <p class="text-slate-500 text-lg leading-relaxed mb-10">
        Deixe a Maria lidar com o volume bruto da conversa inicial e entregue para seu time apenas pacientes qualificados e prontos para agendamento.
      </p>
      <a href="#" class="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white py-4 px-8 rounded hover:bg-slate-800 transition-all shadow-md shadow-slate-200 hover:shadow-lg">
        Fazer Orçamento Exclusivo
      </a>
      <div class="space-y-0 text-left mt-16">
        <div class="group border-b border-slate-100">
          <button class="faq-toggle w-full pt-6 pb-6 flex items-center justify-between cursor-pointer text-left focus:outline-none">
            <h3 class="text-lg font-medium text-slate-900 group-hover:text-teal-600 transition-colors">A Maria substitui minha equipe?</h3>
            <span class="iconify w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" data-icon="solar:add-circle-linear"></span>
          </button>
          <div class="faq-content hidden pb-8 text-slate-500 font-light leading-relaxed animate-reveal">Não. Ela retira tarefas repetitivas e encaminha exceções para o time humano.</div>
        </div>
        <div class="group border-b border-slate-100">
          <button class="faq-toggle w-full pt-6 pb-6 flex items-center justify-between cursor-pointer text-left focus:outline-none">
            <h3 class="text-lg font-medium text-slate-900 group-hover:text-teal-600 transition-colors">Ela integra com agenda e CRM?</h3>
            <span class="iconify w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" data-icon="solar:add-circle-linear"></span>
          </button>
          <div class="faq-content hidden pb-8 text-slate-500 font-light leading-relaxed animate-reveal">Sim, a integração é feita conforme as ferramentas que sua clínica já utiliza.</div>
        </div>
        <div class="group border-b border-slate-100">
          <button class="faq-toggle w-full pt-6 pb-6 flex items-center justify-between cursor-pointer text-left focus:outline-none">
            <h3 class="text-lg font-medium text-slate-900 group-hover:text-teal-600 transition-colors">Atende fora do horário comercial?</h3>
            <span class="iconify w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" data-icon="solar:add-circle-linear"></span>
          </button>
          <div class="faq-content hidden pb-8 text-slate-500 font-light leading-relaxed animate-reveal">Sim. A Maria opera 24/7 para captar oportunidades mesmo quando a recepção está offline.</div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer class="relative w-full border-t border-slate-100 bg-slate-50 z-20 pt-24 pb-12">
  <div class="max-w-[1600px] mx-auto px-6 lg:px-[6%]">
    <div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 gap-4">
      <p class="text-xs text-slate-400">© 2024 Maria AI Software de Atendimento. Arquitetura protegida.</p>
    </div>
  </div>
</footer>
`;

function App() {
  useEffect(() => {
    const menuBtn = document.getElementById("open-menu");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
      if (!mobileMenu) return;
      const isHidden = mobileMenu.classList.contains("hidden-menu");
      mobileMenu.classList.toggle("hidden-menu", !isHidden);
      mobileMenu.classList.toggle("visible-menu", isHidden);
      document.body.style.overflow = isHidden ? "hidden" : "";
    };

    menuBtn?.addEventListener("click", toggleMenu);
    closeBtn?.addEventListener("click", toggleMenu);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));

    const faqButtons = document.querySelectorAll(".faq-toggle");
    faqButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.parentElement?.querySelector(".faq-content");
        content?.classList.toggle("hidden");
      });
    });

    const canvas = document.getElementById("recoveryChart");
    let chart;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(20, 184, 166, 0.15)");
        gradient.addColorStop(1, "rgba(20, 184, 166, 0)");
        chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Lead", "Contato", "Qualificação", "Agenda", "Confirmação", "Consulta"],
            datasets: [
              { label: "Com Maria AI", data: [92, 88, 83, 79, 76, 74], borderColor: "#14b8a6", backgroundColor: gradient, borderWidth: 2, tension: 0.4, fill: true },
              { label: "Fluxo tradicional", data: [92, 70, 54, 42, 35, 29], borderColor: "#cbd5e1", borderWidth: 2, borderDash: [6, 6], tension: 0.4 },
            ],
          },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } },
        });
      }
    }

    const animationFrame = document.getElementById("phone-animation-frame");
    const animationProgress = document.getElementById("phone-animation-progress");
    const animationProgressFill = document.getElementById("phone-animation-progress-fill");
    const animationRestartBtn = document.getElementById("phone-animation-restart");
    const expectedChatMessages = 30;
    let progressPoller;

    const setAnimationProgress = (value) => {
      const clampedValue = Math.max(0, Math.min(100, value));
      if (animationProgressFill) {
        animationProgressFill.style.height = `${clampedValue}%`;
      }
      animationProgress?.setAttribute("aria-valuenow", String(Math.round(clampedValue)));
    };

    const stopAnimationProgressPolling = () => {
      if (progressPoller) {
        window.clearInterval(progressPoller);
        progressPoller = undefined;
      }
    };

    const updateAnimationProgressFromFrame = () => {
      if (!(animationFrame instanceof HTMLIFrameElement)) return;
      const frameDocument = animationFrame.contentDocument;
      if (!frameDocument) return;

      const messageRowsCount = frameDocument.querySelectorAll(".wa-chat .wa-row").length;
      const allTexts = Array.from(frameDocument.querySelectorAll(".wa-chat .wa-text"))
        .map((el) => el.textContent || "")
        .join(" ");
      const reachedFinalMessage = allTexts.includes("Estamos finalizando seu atendimento");

      if (reachedFinalMessage) {
        setAnimationProgress(100);
        stopAnimationProgressPolling();
        return;
      }

      const progressByMessages = (messageRowsCount / expectedChatMessages) * 100;
      setAnimationProgress(progressByMessages);
    };

    const startAnimationProgressPolling = () => {
      stopAnimationProgressPolling();
      setAnimationProgress(0);
      progressPoller = window.setInterval(updateAnimationProgressFromFrame, 250);
    };

    const restartAnimation = () => {
      if (!(animationFrame instanceof HTMLIFrameElement)) return;
      animationFrame.src = `/phone-chat/index.html?restart=${Date.now()}`;
      setAnimationProgress(0);
    };

    if (animationFrame instanceof HTMLIFrameElement) {
      animationFrame.addEventListener("load", startAnimationProgressPolling);
    }
    animationRestartBtn?.addEventListener("click", restartAnimation);

    window.lucide?.createIcons();

    return () => {
      menuBtn?.removeEventListener("click", toggleMenu);
      closeBtn?.removeEventListener("click", toggleMenu);
      observer.disconnect();
      chart?.destroy();
      stopAnimationProgressPolling();
      if (animationFrame instanceof HTMLIFrameElement) {
        animationFrame.removeEventListener("load", startAnimationProgressPolling);
      }
      animationRestartBtn?.removeEventListener("click", restartAnimation);
      faqButtons.forEach((btn) => btn.replaceWith(btn.cloneNode(true)));
      document.body.style.overflow = "";
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

export default App;
