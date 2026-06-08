## 1. Architecture Design
```mermaid
graph TB
    subgraph Frontend
        A[React + TypeScript]
        B[React Router DOM]
        C[Tailwind CSS]
        D[Lucide React Icons]
    end
    subgraph Build
        E[Vite]
    end
    A --> B
    A --> C
    A --> D
    E --> A
```

## 2. Technology Description
- Frontend: React@18 + TypeScript + tailwindcss@3 + vite
- Initialization Tool: vite-init
- Backend: None
- Database: None

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | 首页 |
| /about | 关于我 |
| /skills | 专业技能 |
| /portfolio | 项目作品集 |
| /dashboard | 数据看板 |
| /pandas | Pandas训练项目 |

## 4. API Definitions
不适用

## 5. Server Architecture Diagram
不适用

## 6. Data Model
不适用
