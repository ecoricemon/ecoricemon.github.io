export const defaultLocale = "ko";

export const locales = {
  ko: {
    meta: {
      archiveName: "Portfolio",
      headerSummary: "Reliability / Scalability",
      footer: "Problem-solving focused engineer",
    },
    theme: {
      lightLabel: "라이트 테마로 전환",
      darkLabel: "다크 테마로 전환",
    },
    hero: {
      eyebrow: "System Software Engineer",
      title: "안정성과 확장성을 중심으로 시스템을 설계하는 개발자",
      message: "방위산업 실무에서 체감한 복잡성 문제를 Rust와 데이터 지향 설계로 해결합니다.",
      blueprintTitle: "Navigation",
    },
    nav: [
      { label: "실무 경험", href: "#foundation" },
      { label: "문제 식별", href: "#problem" },
      { label: "접근법 설계", href: "#solution" },
      { label: "개인 프로젝트", href: "#projects" },
    ],
    sectionLabels: {
      foundation: "The Foundation",
      problem: "The Problem",
      solution: "The Solution",
    },
    foundation: {
      title: "방위산업 소프트웨어 개발 및 신뢰성 검증",
      body: "방위산업 분야에서 신뢰성 중심의 소프트웨어를 개발하고 시험했습니다.",
    },
    problem: {
      title: "안정성과 확장성을 가로막는 핵심 과제",
      body: "실무를 통해 시스템의 안정성과 확장성이 서비스의 성패를 결정짓는 핵심 요소임을 체감했습니다.",
      categoryPrefix: "Category",
      categories: [
        {
          title: "안정성 문제",
          tone: "love",
          items: [
            {
              label: "메모리 측면",
              questions: ["포인터가 가리키는 주소가 유효한가?", "배열 인덱스가 유효한가?", "힙 메모리가 적절히 해제되었는가?"],
            },
            {
              label: "스레드 측면",
              questions: ["데이터 경합이 발생할 가능성이 있는가?"],
            },
          ],
        },
        {
          title: "확장성 문제",
          tone: "gold",
          items: [
            {
              label: "기능 측면",
              questions: ["유지보수를 지속할수록 상속 관계가 복잡해진다.", "상속 관계가 복잡할 경우 리팩토링이 어렵다."],
            },
            {
              label: "성능 측면",
              questions: ["단일 스레드에서 멀티스레드로 확장할 때 스레드 관리 복잡도가 증가한다."],
            },
          ],
        },
      ],
    },
    solution: {
      title: "안정성을 보장하는 언어를 기반으로, 확장성을 제공하는 프레임워크를 개발하고 있습니다.",
      frameworkTitle: "통합 프레임워크",
      frameworkSubtitle: "CPU + GPU 통합 실행 프레임워크(예정)",
      rustTitle: "Rust",
      rustSubtitle: "메모리 · 스레드 안정성 확보",
      track: [
        {
          title: "프레임워크",
          body: "목표: 안정성과 확장성을 겸비한 프레임워크 개발",
        },
        {
          title: "확장성",
          body: "데이터와 기능을 분리하는 데이터 지향 접근으로 기능 확장성을 확보하고, CPU/GPU 활용으로 성능 확장성을 넓힙니다.",
        },
        {
          title: "안정성",
          body: "Rust 언어를 통해 메모리와 스레드 안정성을 확보합니다.",
        },
      ],
      branches: [
        {
          title: "데이터 지향 멀티스레딩",
          icon: "cpu",
          items: ["CPU 병렬/비동기 실행 엔진"],
        },
        {
          title: "Rust ▶ 셰이더 변환",
          icon: "braces",
          items: ["Rust 언어 의미 분석 라이브러리", "논리 추론 라이브러리", "GPU 호환성 검사 라이브러리", "셰이더 소스 코드 생성 라이브러리(예정)"],
          mutedItems: ["셰이더 소스 코드 생성 라이브러리(예정)"],
        },
      ],
    },
    projectLabels: {
      badgePrefix: "Project",
      why: "Why",
      solution: "Solution",
      github: "GitHub",
      docs: "Docs.rs",
    },
    projects: [
      {
        letter: "A",
        title: "CPU 병렬/비동기 실행 엔진",
        name: "데이터 지향 멀티스레딩: my-ecs",
        icon: "cpu",
        accent: "foam",
        reason: "객체지향 프로그래밍은 초기에는 직관적이지만, 기능이 확장될수록 구조가 복잡해질 수 있습니다.",
        summary: "데이터 지향 ECS 패턴으로 기능과 데이터를 분리하고, 구조적 복잡성을 실행 엔진 내부로 가져옵니다.",
        bullets: ["데이터 경합 방지", "Work-stealing 기반 동기/비동기 스케줄링", "Native worker와 Web worker를 포괄하는 인터페이스"],
        github: "https://github.com/ecoricemon/my-ecs",
        docs: "https://docs.rs/my-ecs",
        showDocs: true,
      },
      {
        letter: "B",
        title: "Rust 의미 분석 라이브러리",
        name: "Rust ▶ 셰이더 변환: syn-sem",
        icon: "braces",
        accent: "iris",
        reason: "단일 Rust 소스 코드를 CPU와 GPU에서 함께 실행하려면 GPU용 셰이더 언어로 다시 작성해야 하는 중복이 발생합니다.",
        summary: "CPU와 GPU가 같은 소스 코드로부터 실행될 수 있도록 Rust 소스에 대한 이름 해석, 타입 추론, 상수 평가 등을 수행합니다.",
        bullets: ["Name resolution", "Type inference", "Const evaluation", "Monomorphization"],
        github: "https://github.com/ecoricemon/syn-sem",
        docs: "https://docs.rs/syn-sem",
      },
      {
        letter: "C",
        title: "논리 추론 라이브러리",
        name: "Rust ▶ 셰이더 변환: logic-eval",
        icon: "gitBranch",
        accent: "gold",
        reason: "Rust 소스 코드의 의미 분석 기능은 구현이 복잡한 논리 문제들입니다.",
        summary: "논리 추론을 통해 복잡한 논리 문제를 해결합니다.",
        bullets: ["Parsing", "Knowledge base", "Unification"],
        github: "https://github.com/ecoricemon/logic-eval",
        docs: "https://docs.rs/logic-eval",
      },
      {
        letter: "D",
        title: "GPU 호환성 검사 라이브러리",
        name: "Rust ▶ 셰이더 변환: my-wgsl",
        icon: "databaseZap",
        accent: "rose",
        reason: "CPU와 GPU가 데이터를 공유할 때 레이아웃 호환 문제가 발생하며, 개발자가 직접 레이아웃을 계산해야 합니다.",
        summary: "레이아웃 호환성을 상수 평가 시점에 검증해 CPU-GPU 공유 데이터의 불확실성을 줄입니다.",
        bullets: ["상수 평가 시점 레이아웃 검사", "반복적인 수작업 레이아웃 계산 제거"],
        github: "https://github.com/ecoricemon/my-wgsl",
        docs: "https://docs.rs/my-wgsl",
      },
      {
        letter: "E",
        title: "CI/CD 자동 구축",
        name: "auto-kube",
        icon: "network",
        accent: "gold",
        reason: "Kubernetes 기반 CI/CD 구축은 구성 요소가 많고 수작업 설정 오류 가능성이 높아, 반복 가능한 인프라 구축 방식이 필요합니다.",
        summary: "Kubernetes 기반 인프라를 Ansible로 선언해 수작업 설정 오류를 줄입니다.",
        bullets: ["Harbor, Gitea, Jenkins, Argo CD 구성", "MetalLB, Cilium, CoreDNS 기반 클러스터 설계", "온프레미스 환경의 반복 가능한 인프라 구축"],
        github: "https://github.com/ecoricemon/auto-kube",
        docs: "https://docs.rs/auto-kube",
      },
    ],
  },
};
