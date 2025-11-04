# Database Schema & Class Diagrams

## Entity Relationship Diagram

```mermaid
erDiagram
    User ||--o{ Permission : has
    User {
        int id PK
        string name
        string email UK
        string password
        string role
        timestamp created_at
        timestamp updated_at
    }
    
    Permission {
        int id PK
        string module
        boolean canCreate
        boolean canRead
        boolean canUpdate
        boolean canDelete
        int userId FK
    }
    
    Client ||--o{ Vehicle : owns
    Client ||--o{ Bon : has
    Client ||--o{ Entree : has
    Client {
        int id PK
        string name
        enum type
        string identifiant
    }
    
    Vehicle ||--o{ Bon : generates
    Vehicle ||--o{ Carburant : consumes
    Vehicle ||--o{ Vidange : requires
    Vehicle ||--o{ Document : has
    Vehicle ||--o{ VisiteTechnique : undergoes
    Vehicle ||--o{ PieceDeRechange : uses
    Vehicle }o--|| Salarie : driven_by
    Vehicle {
        int id PK
        string immatricule
        string type
        string marque
        string modele
        int kilometrageVidange
        int clientId FK
        int chauffeurId FK
    }
    
    Salarie ||--o{ Augmentation : receives
    Salarie {
        int id PK
        string name
        float salaire
        string date
        string date_sortie
    }
    
    Augmentation {
        int id PK
        float montant
        string date
        int salarieId FK
    }
    
    Bon ||--o{ LigneBon : contains
    Bon ||--o{ Paiement : has
    Bon {
        int id PK
        int jour
        int mois
        int annee
        float transport
        float remise
        float montant
        string numero
        int vehiculeId FK
        int clientId FK
    }
    
    LigneBon {
        int id PK
        string designation
        int quantity
        float prix
        int bonId FK
    }
    
    Paiement {
        int id PK
        float montant
        string date
        string type
        int bonId FK
    }
    
    Machine ||--o{ Produit : produces
    Machine ||--o{ Production : runs
    Machine ||--o{ PieceDeRechange : uses
    Machine {
        int id PK
        string name
        string description
        string type
        timestamp createdAt
        timestamp updatedAt
    }
    
    Produit {
        int id PK
        string name
        float prix
        int machineId FK
    }
    
    Production {
        int id PK
        int quantity
        timestamp startDate
        timestamp endDate
        enum status
        text notes
        timestamp createdAt
        timestamp updatedAt
        int machineId FK
    }
    
    Stock {
        int id PK
        string name
        string type
        float prixVente
        int quantity
        timestamp createdAt
        timestamp updatedAt
    }
    
    StockOperation {
        int id PK
        string type
        int quantity
        float prix
        string date
        int stockId FK
    }
    
    PieceDeRechange {
        int id PK
        string name
        float prix
        string date
        int machineId FK
        int vehiculeId FK
    }
    
    Fournisseur ||--o{ BonCharge : supplies
    Fournisseur {
        int id PK
        string ice
        string nom
        string responsable
        string email
        string telephone
    }
    
    BonCharge ||--o{ LigneBonCharge : contains
    BonCharge ||--o{ ChargePay : has
    BonCharge {
        int id PK
        string numero
        float montant
        string dateEmission
        string type
        string numeroRef
        int fournisseurId FK
    }
    
    LigneBonCharge {
        int id PK
        string designation
        int quantity
        float prix
        int bonId FK
    }
    
    ChargePay {
        int id PK
        float montant
        string date
        string type
        int bonId FK
    }
    
    Carburant {
        int id PK
        float quantite
        float prix
        string date
        int vehiculeId FK
    }
    
    Vidange {
        int id PK
        int kilometrage
        float prix
        string date
        int vehiculeId FK
    }
    
    VisiteTechnique {
        int id PK
        string date
        float prix
        string notes
        int vehiculeId FK
    }
    
    Document {
        int id PK
        string type
        string filePath
        string dateExpiration
        int vehiculeId FK
    }
    
    Devis ||--o{ LigneDevis : contains
    Devis {
        int id PK
        string numero
        string date
        float montant
        string status
    }
    
    LigneDevis {
        int id PK
        string designation
        int quantity
        float prix
        int devisId FK
    }
    
    Charge {
        int id PK
        string name
        string type
        float montant
        string date
    }
    
    Check {
        int id PK
        string numero
        float montant
        string date
        string beneficiaire
    }
    
    Depot {
        int id PK
        float montant
        string date
        string type
    }
    
    Entree {
        int id PK
        float montant
        string date
        string type
        int clientId FK
    }
```

## Class Diagram - Core Entities

```mermaid
classDiagram
    class User {
        +int id
        +string name
        +string email
        +string password
        +string role
        +Date created_at
        +Date updated_at
        +Permission[] permissions
    }
    
    class Permission {
        +int id
        +string module
        +boolean canCreate
        +boolean canRead
        +boolean canUpdate
        +boolean canDelete
        +User user
    }
    
    class Client {
        +int id
        +string name
        +string type
        +string identifiant
        +Vehicle[] vehicules
        +Bon[] bons
        +Entree[] entrees
    }
    
    class Vehicle {
        +int id
        +string immatricule
        +string type
        +string marque
        +string modele
        +int kilometrageVidange
        +Client client
        +Salarie chauffeur
        +PieceDeRechange[] piecesDeRechange
        +Bon[] bons
        +Carburant[] carburants
        +Vidange[] vidanges
        +Document[] documents
        +VisiteTechnique[] visitesTechniques
    }
    
    class Salarie {
        +int id
        +string name
        +float salaire
        +string date
        +string date_sortie
        +Augmentation[] augmentations
    }
    
    class Bon {
        +int id
        +int jour
        +int mois
        +int annee
        +float transport
        +float remise
        +float montant
        +string numero
        +Vehicle vehicule
        +Client client
        +LigneBon[] lignes
        +Paiement[] paiements
    }
    
    class Machine {
        +int id
        +string name
        +string description
        +string type
        +Date createdAt
        +Date updatedAt
        +PieceDeRechange[] piecesDeRechange
        +Produit[] produits
    }
    
    class Production {
        +int id
        +Machine machine
        +int quantity
        +Date startDate
        +Date endDate
        +string status
        +string notes
        +Date createdAt
        +Date updatedAt
    }
    
    class Stock {
        +int id
        +string name
        +string type
        +float prixVente
        +int quantity
        +Date createdAt
        +Date updatedAt
    }
    
    class BonCharge {
        +int id
        +string numero
        +float montant
        +string dateEmission
        +string type
        +string numeroRef
        +LigneBonCharge[] lignes
        +ChargePay[] paiements
        +Fournisseur fournisseur
    }
    
    User "1" --> "*" Permission
    Client "1" --> "*" Vehicle
    Client "1" --> "*" Bon
    Vehicle "*" --> "1" Client
    Vehicle "*" --> "1" Salarie
    Vehicle "1" --> "*" Bon
    Bon "1" --> "*" LigneBon
    Bon "1" --> "*" Paiement
    Machine "1" --> "*" Production
    Machine "1" --> "*" Produit
    BonCharge "*" --> "1" Fournisseur
```

## Domain Model - Sales Module

```mermaid
classDiagram
    class Bon {
        <<Entity>>
        +int id
        +int jour
        +int mois
        +int annee
        +float transport
        +float remise
        +float montant
        +string numero
        +calculateTotal() float
        +addLigne(ligne) void
        +addPaiement(paiement) void
    }
    
    class LigneBon {
        <<Entity>>
        +int id
        +string designation
        +int quantity
        +float prix
        +getSubTotal() float
    }
    
    class Paiement {
        <<Entity>>
        +int id
        +float montant
        +string date
        +string type
        +validate() boolean
    }
    
    class Devis {
        <<Entity>>
        +int id
        +string numero
        +string date
        +float montant
        +string status
        +convertToBon() Bon
    }
    
    class LigneDevis {
        <<Entity>>
        +int id
        +string designation
        +int quantity
        +float prix
        +getSubTotal() float
    }
    
    Bon "1" *-- "*" LigneBon : contains
    Bon "1" *-- "*" Paiement : has
    Devis "1" *-- "*" LigneDevis : contains
```

## Domain Model - Fleet Module

```mermaid
classDiagram
    class Vehicle {
        <<Entity>>
        +int id
        +string immatricule
        +string type
        +string marque
        +string modele
        +int kilometrageVidange
        +needsVidange() boolean
        +addDocument(doc) void
        +getMaintenanceHistory() array
    }
    
    class Carburant {
        <<Entity>>
        +int id
        +float quantite
        +float prix
        +string date
        +calculateCost() float
    }
    
    class Vidange {
        <<Entity>>
        +int id
        +int kilometrage
        +float prix
        +string date
        +isOverdue() boolean
    }
    
    class VisiteTechnique {
        <<Entity>>
        +int id
        +string date
        +float prix
        +string notes
        +isExpired() boolean
    }
    
    class Document {
        <<Entity>>
        +int id
        +string type
        +string filePath
        +string dateExpiration
        +isExpired() boolean
        +getFile() File
    }
    
    Vehicle "1" *-- "*" Carburant : consumes
    Vehicle "1" *-- "*" Vidange : requires
    Vehicle "1" *-- "*" VisiteTechnique : undergoes
    Vehicle "1" *-- "*" Document : has
```

## Domain Model - Production Module

```mermaid
classDiagram
    class Machine {
        <<Entity>>
        +int id
        +string name
        +string description
        +string type
        +isAvailable() boolean
        +startProduction() void
        +stopProduction() void
    }
    
    class Production {
        <<Entity>>
        +int id
        +int quantity
        +Date startDate
        +Date endDate
        +string status
        +string notes
        +start() void
        +complete() void
        +cancel() void
        +getDuration() int
    }
    
    class Produit {
        <<Entity>>
        +int id
        +string name
        +float prix
        +calculateRevenue(qty) float
    }
    
    class PieceDeRechange {
        <<Entity>>
        +int id
        +string name
        +float prix
        +string date
        +isAvailable() boolean
    }
    
    Machine "1" --> "*" Production : runs
    Machine "1" --> "*" Produit : produces
    Machine "1" --> "*" PieceDeRechange : uses
```

## Domain Model - Finance Module

```mermaid
classDiagram
    class BonCharge {
        <<Entity>>
        +int id
        +string numero
        +float montant
        +string dateEmission
        +string type
        +string numeroRef
        +calculateTotal() float
        +getRemainingAmount() float
    }
    
    class LigneBonCharge {
        <<Entity>>
        +int id
        +string designation
        +int quantity
        +float prix
        +getSubTotal() float
    }
    
    class ChargePay {
        <<Entity>>
        +int id
        +float montant
        +string date
        +string type
        +validate() boolean
    }
    
    class Charge {
        <<Entity>>
        +int id
        +string name
        +string type
        +float montant
        +string date
    }
    
    class Check {
        <<Entity>>
        +int id
        +string numero
        +float montant
        +string date
        +string beneficiaire
        +isCashed() boolean
    }
    
    class Depot {
        <<Entity>>
        +int id
        +float montant
        +string date
        +string type
    }
    
    BonCharge "1" *-- "*" LigneBonCharge : contains
    BonCharge "1" *-- "*" ChargePay : has
```

## Service Layer Architecture

```mermaid
classDiagram
    class BonService {
        <<Service>>
        -bonRepository Repository
        +create(dto) Bon
        +findAll() Bon[]
        +findOne(id) Bon
        +update(id, dto) Bon
        +remove(id) void
        +calculateTotal(bon) float
    }
    
    class VehiculeService {
        <<Service>>
        -vehiculeRepository Repository
        +create(dto) Vehicle
        +findAll() Vehicle[]
        +findOne(id) Vehicle
        +update(id, dto) Vehicle
        +remove(id) void
        +getMaintenanceSchedule(id) array
    }
    
    class ProductionService {
        <<Service>>
        -productionRepository Repository
        -machineService MachineService
        +create(dto) Production
        +startProduction(id) Production
        +completeProduction(id) Production
        +getProductionStats() object
    }
    
    class StockService {
        <<Service>>
        -stockRepository Repository
        +create(dto) Stock
        +updateQuantity(id, qty) Stock
        +checkAvailability(id) boolean
        +getLowStockItems() Stock[]
    }
    
    class ReportsService {
        <<Service>>
        -bonService BonService
        -productionService ProductionService
        +getSalesReport(period) object
        +getProductionReport(period) object
        +getFinancialReport(period) object
    }
    
    ReportsService --> BonService
    ReportsService --> ProductionService
    ProductionService --> MachineService
```

## Repository Pattern

```mermaid
classDiagram
    class Repository~T~ {
        <<Interface>>
        +find() T[]
        +findOne(id) T
        +save(entity) T
        +update(id, entity) T
        +delete(id) void
    }
    
    class TypeORMRepository~T~ {
        <<Implementation>>
        -dataSource DataSource
        +find() T[]
        +findOne(id) T
        +save(entity) T
        +update(id, entity) T
        +delete(id) void
        +createQueryBuilder() QueryBuilder
    }
    
    class BonRepository {
        +findByClient(clientId) Bon[]
        +findByDateRange(start, end) Bon[]
        +getTotalSales(period) float
    }
    
    class VehicleRepository {
        +findByClient(clientId) Vehicle[]
        +findByImmatricule(immat) Vehicle
        +getMaintenanceDue() Vehicle[]
    }
    
    Repository <|.. TypeORMRepository
    TypeORMRepository <|-- BonRepository
    TypeORMRepository <|-- VehicleRepository
```

## Database Indexes Strategy

| Table | Index | Columns | Type |
|-------|-------|---------|------|
| user | idx_email | email | UNIQUE |
| client | idx_name | name | INDEX |
| vehicle | idx_immatricule | immatricule | UNIQUE |
| vehicle | idx_client | clientId | INDEX |
| bon | idx_numero | numero | UNIQUE |
| bon | idx_client | clientId | INDEX |
| bon | idx_date | annee, mois, jour | INDEX |
| production | idx_machine | machineId | INDEX |
| production | idx_status | status | INDEX |
| production | idx_date | startDate, endDate | INDEX |
| stock | idx_name | name | INDEX |
| bon_charge | idx_fournisseur | fournisseurId | INDEX |

## Data Integrity Constraints

```mermaid
graph TB
    subgraph "Referential Integrity"
        FK1[Vehicle → Client]
        FK2[Bon → Client]
        FK3[Bon → Vehicle]
        FK4[Production → Machine]
        FK5[LigneBon → Bon]
        FK6[Paiement → Bon]
    end
    
    subgraph "Business Rules"
        BR1[Bon.montant >= 0]
        BR2[Stock.quantity >= 0]
        BR3[Production.endDate > startDate]
        BR4[Paiement.montant <= Bon.montant]
    end
    
    subgraph "Unique Constraints"
        UC1[User.email UNIQUE]
        UC2[Vehicle.immatricule UNIQUE]
        UC3[Bon.numero UNIQUE]
    end
```
