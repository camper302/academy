Project
├─ kiwoom-academy/                # 키움 아카데미 메인 프로젝트 디렉토리
│  ├─ docs/                       # 프로젝트 문서화 디렉토리
│  │  ├─ PRD.md                  # 제품 요구사항 문서
│  │  └─ PRD_ver2.md             # 제품 요구사항 문서 개정판
│  └─ my-app/                     # Next.js 기반 웹 애플리케이션
│     ├─ src/                     # 소스 코드 메인 디렉토리
│     │  ├─ app/                  # Next.js 13+ App Router 구조
│     │  │  ├─ admin/            # 관리자 관련 페이지
│     │  │  ├─ api/              # API 라우트 정의
│     │  │  ├─ level-test/       # 레벨 테스트 관련 페이지
│     │  │  ├─ notice/           # 공지사항 관련 페이지
│     │  │  └─ programs/         # 프로그램 소개 페이지
│     │  ├─ components/          # 재사용 가능한 컴포넌트
│     │  │  ├─ common/           # 공통 컴포넌트 (Header, Footer 등)
│     │  │  └─ home/             # 홈페이지 관련 컴포넌트
│     │  ├─ lib/                 # 유틸리티 및 공통 로직
│     │  ├─ models/              # MongoDB 모델 정의
│     │  └─ types/               # TypeScript 타입 정의
│     ├─ public/                 # 정적 파일 저장소
│     └─ .next/                  # Next.js 빌드 결과물


my-app/
├─ .next/
├─ docs/
│  ├─ Directory.md
│  ├─ PRD.md
│  └─ PRD_ver2.md
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ admin/
│  │  ├─ api/
│  │  ├─ fonts/
│  │  ├─ level-test/
│  │  ├─ notice/
│  │  ├─ programs/
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  ├─ lib/
│  ├─ models/
│  └─ types/
├─ .env.local
├─ .eslintrc.json
├─ .gitignore
├─ middleware.ts
├─ next-env.d.ts
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
└─ tsconfig.json

src/app: 페이지와 라우팅을 담당하는 디렉토리
admin: 관리자 페이지
api: API 엔드포인트
level-test: 레벨 테스트 관련 페이지
notice: 공지사항 페이지
programs: 프로그램 소개 페이지
src/components: 재사용 가능한 컴포넌트들이 위치
src/lib: 유틸리티 함수들이 위치
src/models: MongoDB 모델 정의
src/types: TypeScript 타입 정의