#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Categorie
#------------------------------------------------------------

CREATE TABLE Categorie(
        id_Categ Int  Auto_increment  NOT NULL ,
        libelle  Varchar (50) NOT NULL
	,CONSTRAINT Categorie_PK PRIMARY KEY (id_Categ)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Competition
#------------------------------------------------------------

CREATE TABLE Competition(
        id_Comp     Int  Auto_increment  NOT NULL ,
        nom_Comp    Varchar (50) NOT NULL ,
        description Date NOT NULL ,
        categorie   Varchar (100) NOT NULL ,
        conditions  Varchar (255) NOT NULL ,
        id_Categ    Int NOT NULL
	,CONSTRAINT Competition_PK PRIMARY KEY (id_Comp)

	,CONSTRAINT Competition_Categorie_FK FOREIGN KEY (id_Categ) REFERENCES Categorie(id_Categ)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Personne
#------------------------------------------------------------

CREATE TABLE Personne(
        id_Pers     Int  Auto_increment  NOT NULL ,
        nom_Pers    Varchar (50) NOT NULL ,
        prenom_Pers Varchar (50) NOT NULL ,
        mail_Pers   Varchar (100) NOT NULL ,
        password    Varchar (255) NOT NULL
	,CONSTRAINT Personne_PK PRIMARY KEY (id_Pers)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Participant
#------------------------------------------------------------

CREATE TABLE Participant(
        id_Pers     Int NOT NULL ,
        pseudo      Varchar (20) NOT NULL ,
        etat        Bool ,
        nom_Pers    Varchar (50) NOT NULL ,
        prenom_Pers Varchar (50) NOT NULL ,
        mail_Pers   Varchar (100) NOT NULL ,
        password    Varchar (255) NOT NULL
	,CONSTRAINT Participant_PK PRIMARY KEY (id_Pers)

	,CONSTRAINT Participant_Personne_FK FOREIGN KEY (id_Pers) REFERENCES Personne(id_Pers)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Organisateur
#------------------------------------------------------------

CREATE TABLE Organisateur(
        id_Pers     Int NOT NULL ,
        pseudo      Varchar (20) NOT NULL ,
        etat        Bool ,
        nom_Pers    Varchar (50) NOT NULL ,
        prenom_Pers Varchar (50) NOT NULL ,
        mail_Pers   Varchar (100) NOT NULL ,
        password    Varchar (255) NOT NULL
	,CONSTRAINT Organisateur_PK PRIMARY KEY (id_Pers)

	,CONSTRAINT Organisateur_Personne_FK FOREIGN KEY (id_Pers) REFERENCES Personne(id_Pers)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Administrateur
#------------------------------------------------------------

CREATE TABLE Administrateur(
        id_Pers     Int NOT NULL ,
        pseudo      Varchar (100) NOT NULL ,
        nom_Pers    Varchar (50) NOT NULL ,
        prenom_Pers Varchar (50) NOT NULL ,
        mail_Pers   Varchar (100) NOT NULL ,
        password    Varchar (255) NOT NULL
	,CONSTRAINT Administrateur_PK PRIMARY KEY (id_Pers)

	,CONSTRAINT Administrateur_Personne_FK FOREIGN KEY (id_Pers) REFERENCES Personne(id_Pers)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Organiser
#------------------------------------------------------------

CREATE TABLE Organiser(
        id_Comp    Int NOT NULL ,
        id_Pers    Int NOT NULL ,
        date_debut Date NOT NULL ,
        date_fin   Date NOT NULL
	,CONSTRAINT Organiser_PK PRIMARY KEY (id_Comp,id_Pers)

	,CONSTRAINT Organiser_Competition_FK FOREIGN KEY (id_Comp) REFERENCES Competition(id_Comp)
	,CONSTRAINT Organiser_Organisateur0_FK FOREIGN KEY (id_Pers) REFERENCES Organisateur(id_Pers)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Participer
#------------------------------------------------------------

CREATE TABLE Participer(
        id_Pers              Int NOT NULL ,
        id_Comp              Int NOT NULL ,
        id_Pers_Organisateur Int NOT NULL ,
        date_inscrit         Date NOT NULL ,
        etat                 Bool NOT NULL ,
        score                Int
	,CONSTRAINT Participer_PK PRIMARY KEY (id_Pers,id_Comp,id_Pers_Organisateur)

	,CONSTRAINT Participer_Participant_FK FOREIGN KEY (id_Pers) REFERENCES Participant(id_Pers)
	,CONSTRAINT Participer_Competition0_FK FOREIGN KEY (id_Comp) REFERENCES Competition(id_Comp)
	,CONSTRAINT Participer_Organisateur1_FK FOREIGN KEY (id_Pers_Organisateur) REFERENCES Organisateur(id_Pers)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Gerer
#------------------------------------------------------------

CREATE TABLE Gerer(
        id_Pers              Int NOT NULL ,
        id_Pers_Organisateur Int NOT NULL ,
        id_Pers_Participant  Int NOT NULL
	,CONSTRAINT Gerer_PK PRIMARY KEY (id_Pers,id_Pers_Organisateur,id_Pers_Participant)

	,CONSTRAINT Gerer_Administrateur_FK FOREIGN KEY (id_Pers) REFERENCES Administrateur(id_Pers)
	,CONSTRAINT Gerer_Organisateur0_FK FOREIGN KEY (id_Pers_Organisateur) REFERENCES Organisateur(id_Pers)
	,CONSTRAINT Gerer_Participant1_FK FOREIGN KEY (id_Pers_Participant) REFERENCES Participant(id_Pers)
)ENGINE=InnoDB;

