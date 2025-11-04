# Zaim Carrière - System Architecture

## System Overview

```mermaid
graph TB
    Client[Client Application]
    API[NestJS REST API]
    Auth[JWT Authentication]
    DB[(MySQL Database)]
    
    Client -->|HTTP/HTTPS| API
    API --> Auth
    Auth -->|Validate Token| API
    API -->|TypeORM| DB
    
    subgraph "Core Modules"
        Sales[Sales Management]
        Fleet[Fleet Management]
        HR[HR Management]
        Inventory[Inventory Management]
        Production[Production Management]
        Finance[Finance Management]
    end
    
    API --> Sales
    API --> Fleet
    API --> HR
    API --> Inventory
    API --> Production
    API --> Finance
```

## Architecture Layers

```mermaid
graph LR
    subgraph "Presentation Layer"
        Controllers[Controllers]
        DTOs[DTOs]
        Guards[Guards/Interceptors]
    end
    
    subgraph "Business Layer"
        Services[Services]
        Validators[Validators]
    end
    
    subgraph "Data Layer"
        Entities[Entities]
        Repositories[TypeORM Repositories]
        DB[(MySQL)]
    end
    
    Controllers --> Services
    DTOs --> Controllers
    Guards --> Controllers
    Services --> Repositories
    Entities --> Repositories
    Repositories --> DB
```

## Request Flow

```mermaid
sequenceDiagram
    participant C as Client
    participant G as Auth Guard
    participant Ctrl as Controller
    participant S as Service
    participant R as Repository
    participant DB as MySQL
    
    C->>G: HTTP Request + JWT
    G->>G: Validate Token
    G->>Ctrl: Authorized Request
    Ctrl->>Ctrl: Validate DTO
    Ctrl->>S: Business Logic
    S->>R: Data Operation
    R->>DB: SQL Query
    DB-->>R: Result
    R-->>S: Entity
    S-->>Ctrl: Response Data
    Ctrl-->>C: HTTP Response
```

## Authentication Flow

```mermaid
sequenceDiagram
    participant C as Client
    participant Auth as Auth Controller
    participant AuthS as Auth Service
    participant UserS as User Service
    participant DB as Database
    
    C->>Auth: POST /auth/login {email, password}
    Auth->>AuthS: signIn(email, password)
    AuthS->>UserS: findByEmail(email)
    UserS->>DB: SELECT user
    DB-->>UserS: User Data
    UserS-->>AuthS: User Entity
    AuthS->>AuthS: Compare Password
    AuthS->>AuthS: Generate JWT Token
    AuthS-->>Auth: {access_token, user}
    Auth-->>C: 200 OK + Token
    
    Note over C: Store Token
    
    C->>Auth: GET /protected + Bearer Token
    Auth->>AuthS: Validate Token
    AuthS-->>Auth: User Payload
    Auth-->>C: Protected Resource
```

## Module Dependencies

```mermaid
graph TD
    App[App Module]
    
    App --> Auth[Auth Module]
    App --> User[User Module]
    App --> Client[Client Module]
    App --> Bon[Bon Module]
    App --> Vehicle[Vehicle Module]
    App --> Stock[Stock Module]
    App --> Machine[Machine Module]
    App --> Production[Production Module]
    App --> Salarie[Salarie Module]
    App --> Finance[Finance Modules]
    
    Auth --> User
    Bon --> Client
    Bon --> Vehicle
    Vehicle --> Client
    Vehicle --> Salarie
    Production --> Machine
    Machine --> Stock
    
    Finance --> BonCharge[Bon Charge]
    Finance --> Payment[Payment]
    Finance --> Caisse[Caisse]
```

## Core Business Domains

```mermaid
graph TB
    subgraph "Sales Domain"
        Bon[Bon/Invoice]
        Devis[Devis/Quote]
        Client[Client]
        LigneBon[Invoice Lines]
        Paiement[Payment]
    end
    
    subgraph "Fleet Domain"
        Vehicle[Vehicle]
        Carburant[Fuel]
        Vidange[Oil Change]
        VisiteTech[Technical Visit]
        Document[Documents]
    end
    
    subgraph "Production Domain"
        Machine[Machine]
        Production[Production]
        Produit[Product]
        MachineType[Machine Type]
    end
    
    subgraph "Inventory Domain"
        Stock[Stock]
        StockOp[Stock Operation]
        PieceRechange[Spare Parts]
        Entree[Entry]
    end
    
    subgraph "HR Domain"
        Salarie[Employee]
        Salaire[Salary]
        Augmentation[Raise]
    end
    
    subgraph "Finance Domain"
        BonCharge[Expense Invoice]
        Charge[Charge]
        Caisse[Cash Register]
        Check[Check]
        Depot[Deposit]
    end
    
    Client --> Bon
    Client --> Vehicle
    Bon --> LigneBon
    Bon --> Paiement
    Vehicle --> Carburant
    Vehicle --> Vidange
    Machine --> Production
    Machine --> Produit
    Salarie --> Vehicle
```

## Technology Stack

```mermaid
graph LR
    subgraph "Backend"
        NestJS[NestJS Framework]
        TypeScript[TypeScript]
        TypeORM[TypeORM]
        JWT[JWT Auth]
    end
    
    subgraph "Database"
        MySQL[MySQL 5.7+]
    end
    
    subgraph "Tools"
        Yarn[Yarn Package Manager]
        PM2[PM2 Process Manager]
    end
    
    NestJS --> TypeScript
    NestJS --> TypeORM
    NestJS --> JWT
    TypeORM --> MySQL
    NestJS --> Yarn
    NestJS --> PM2
```

## Deployment Architecture

```mermaid
graph TB
    subgraph "Production Environment"
        PM2[PM2 Process Manager]
        App1[NestJS Instance 1]
        App2[NestJS Instance 2]
        App3[NestJS Instance 3]
    end
    
    subgraph "Database Layer"
        MySQL[(MySQL Server)]
    end
    
    subgraph "File Storage"
        Uploads[/uploads/vehicles/documents]
    end
    
    PM2 --> App1
    PM2 --> App2
    PM2 --> App3
    
    App1 --> MySQL
    App2 --> MySQL
    App3 --> MySQL
    
    App1 --> Uploads
    App2 --> Uploads
    App3 --> Uploads
```

## API Endpoints Structure

| Domain | Endpoints | Description |
|--------|-----------|-------------|
| **Auth** | `/auth/login`, `/auth/register` | Authentication & Authorization |
| **Users** | `/user/*` | User management |
| **Clients** | `/client/*` | Client management |
| **Sales** | `/bon/*`, `/devis/*` | Invoice & Quote management |
| **Fleet** | `/vehicule/*`, `/carburant/*`, `/vidange/*` | Vehicle fleet management |
| **Production** | `/production/*`, `/machine/*`, `/produit/*` | Production tracking |
| **Inventory** | `/stock/*`, `/stock-operation/*` | Inventory management |
| **HR** | `/salarie/*`, `/salaire/*` | Employee & payroll |
| **Finance** | `/bon-charge/*`, `/charge/*`, `/caisse/*`, `/payment/*` | Financial operations |
| **Reports** | `/reports/*` | Business intelligence |

## Security Features

```mermaid
graph LR
    subgraph "Security Layers"
        JWT[JWT Token]
        Guard[Auth Guard]
        RBAC[Role-Based Access]
        Validation[DTO Validation]
        Hash[Password Hashing]
    end
    
    Request[HTTP Request] --> JWT
    JWT --> Guard
    Guard --> RBAC
    RBAC --> Validation
    Validation --> Controller[Controller]
    
    Hash --> Database[(Database)]
```

## Data Flow Patterns

```mermaid
graph LR
    subgraph "Create Operation"
        C1[Client] -->|POST /resource| Ctrl1[Controller]
        Ctrl1 -->|CreateDTO| S1[Service]
        S1 -->|Entity| R1[Repository]
        R1 -->|INSERT| DB1[(DB)]
    end
    
    subgraph "Read Operation"
        C2[Client] -->|GET /resource/:id| Ctrl2[Controller]
        Ctrl2 --> S2[Service]
        S2 -->|findOne| R2[Repository]
        R2 -->|SELECT| DB2[(DB)]
    end
    
    subgraph "Update Operation"
        C3[Client] -->|PATCH /resource/:id| Ctrl3[Controller]
        Ctrl3 -->|UpdateDTO| S3[Service]
        S3 -->|Entity| R3[Repository]
        R3 -->|UPDATE| DB3[(DB)]
    end
```

## Error Handling Flow

```mermaid
sequenceDiagram
    participant C as Client
    participant Ctrl as Controller
    participant S as Service
    participant DB as Database
    participant EH as Exception Handler
    
    C->>Ctrl: Request
    Ctrl->>S: Process
    S->>DB: Query
    DB-->>S: Error
    S->>EH: Throw Exception
    EH->>EH: Format Error
    EH-->>C: HTTP Error Response
```

## Performance Optimization

```mermaid
graph TB
    subgraph "Optimization Strategies"
        Eager[Eager Loading]
        Lazy[Lazy Loading]
        Index[Database Indexes]
        Cache[Response Caching]
        Pagination[Pagination]
    end
    
    Query[Database Query] --> Eager
    Query --> Lazy
    Query --> Index
    Response[API Response] --> Cache
    Response --> Pagination
```

## Key Features

- **Multi-tenant Support**: Client-based data isolation
- **Real-time Tracking**: Production and fleet monitoring
- **Financial Management**: Complete accounting system
- **Document Management**: Vehicle document storage
- **Reporting**: Comprehensive business reports
- **Role-based Access**: User permissions system
- **Audit Trail**: Timestamp tracking on all entities
