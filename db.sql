-- MySQL Script generated by MySQL Workbench
-- Wed Sep  1 09:52:18 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`USUARIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`USUARIO` (
  `EMAIL` VARCHAR(45) NOT NULL,
  `SENHA` VARCHAR(45) NOT NULL,
  `NOME` VARCHAR(45) NOT NULL,
  `TELEFONE` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`EMAIL`),
  UNIQUE INDEX `EMAIL_UNIQUE` (`EMAIL` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`SOLICITACAO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`SOLICITACAO` (
  `idSOLICITACAO` INT NOT NULL AUTO_INCREMENT,
  `DATA` VARCHAR(45) NOT NULL,
  `USUARIO_EMAIL` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idSOLICITACAO`),
  UNIQUE INDEX `idSOLICITACAO_UNIQUE` (`idSOLICITACAO` ASC) VISIBLE,
  INDEX `fk_SOLICITACAO_USUARIO1_idx` (`USUARIO_EMAIL` ASC) VISIBLE,
  CONSTRAINT `fk_SOLICITACAO_USUARIO1`
    FOREIGN KEY (`USUARIO_EMAIL`)
    REFERENCES `mydb`.`USUARIO` (`EMAIL`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`CATEGORIAS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`CATEGORIAS` (
  `idCATEGORIAS` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(45) NOT NULL,
  `DESCRICAO` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`idCATEGORIAS`),
  UNIQUE INDEX `idCATEGORIAS_UNIQUE` (`idCATEGORIAS` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ANUNCIOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ANUNCIOS` (
  `idANUNCIO` INT NOT NULL AUTO_INCREMENT,
  `DESCRICAO` VARCHAR(128) NULL DEFAULT NULL,
  `VALOR` DOUBLE NOT NULL,
  `CATEGORIAS_idCATEGORIAS` INT NOT NULL,
  `NOME` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idANUNCIO`),
  INDEX `fk_ANUNCIOS_CATEGORIAS1_idx` (`CATEGORIAS_idCATEGORIAS` ASC) VISIBLE,
  CONSTRAINT `fk_ANUNCIOS_CATEGORIAS1`
    FOREIGN KEY (`CATEGORIAS_idCATEGORIAS`)
    REFERENCES `mydb`.`CATEGORIAS` (`idCATEGORIAS`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`GUARDARSOLICITAO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`GUARDARSOLICITAO` (
  `idGUARDARSOLICITAO` INT NOT NULL AUTO_INCREMENT,
  `QUANTIDADE` INT NOT NULL,
  `SOLICITACAO_idSOLICITACAO` INT NOT NULL,
  `ANUNCIOS_idANUNCIO` INT NOT NULL,
  PRIMARY KEY (`idGUARDARSOLICITAO`, `SOLICITACAO_idSOLICITACAO`),
  UNIQUE INDEX `idGUARDARSOLICITAO_UNIQUE` (`idGUARDARSOLICITAO` ASC) VISIBLE,
  INDEX `fk_GUARDARSOLICITAO_SOLICITACAO1_idx` (`SOLICITACAO_idSOLICITACAO` ASC) VISIBLE,
  INDEX `fk_GUARDARSOLICITAO_ANUNCIOS1_idx` (`ANUNCIOS_idANUNCIO` ASC) VISIBLE,
  CONSTRAINT `fk_GUARDARSOLICITAO_SOLICITACAO1`
    FOREIGN KEY (`SOLICITACAO_idSOLICITACAO`)
    REFERENCES `mydb`.`SOLICITACAO` (`idSOLICITACAO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_GUARDARSOLICITAO_ANUNCIOS1`
    FOREIGN KEY (`ANUNCIOS_idANUNCIO`)
    REFERENCES `mydb`.`ANUNCIOS` (`idANUNCIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comsumerUSER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comsumerUSER` (
  `CPF` VARCHAR(14) NOT NULL,
  `USUARIO_EMAIL` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`CPF`),
  UNIQUE INDEX `CPF_UNIQUE` (`CPF` ASC) VISIBLE,
  INDEX `fk_comsumerUSER_USUARIO_idx` (`USUARIO_EMAIL` ASC) VISIBLE,
  CONSTRAINT `fk_comsumerUSER_USUARIO`
    FOREIGN KEY (`USUARIO_EMAIL`)
    REFERENCES `mydb`.`USUARIO` (`EMAIL`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produtorUser`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produtorUser` (
  `CNPJ` VARCHAR(14) NOT NULL,
  `fantasiaNOME` VARCHAR(45) NOT NULL,
  `LOCAL` VARCHAR(70) NOT NULL,
  `USUARIO_EMAIL` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`CNPJ`),
  UNIQUE INDEX `CNPJ_UNIQUE` (`CNPJ` ASC) VISIBLE,
  INDEX `fk_produtorUser_USUARIO1_idx` (`USUARIO_EMAIL` ASC) VISIBLE,
  CONSTRAINT `fk_produtorUser_USUARIO1`
    FOREIGN KEY (`USUARIO_EMAIL`)
    REFERENCES `mydb`.`USUARIO` (`EMAIL`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ITEM`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ITEM` (
  `idITEM` INT NOT NULL AUTO_INCREMENT,
  `DISPONIBILIDADE` INT NOT NULL,
  `disponibilidadeENTREGA` VARCHAR(45) NOT NULL,
  `ANUNCIOS_idANUNCIO` INT NOT NULL,
  PRIMARY KEY (`idITEM`),
  UNIQUE INDEX `idITEM_UNIQUE` (`idITEM` ASC) VISIBLE,
  INDEX `fk_ITEM_ANUNCIOS1_idx` (`ANUNCIOS_idANUNCIO` ASC) VISIBLE,
  CONSTRAINT `fk_ITEM_ANUNCIOS1`
    FOREIGN KEY (`ANUNCIOS_idANUNCIO`)
    REFERENCES `mydb`.`ANUNCIOS` (`idANUNCIO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`SERVICO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`SERVICO` (
  `idSERVICO` INT NOT NULL AUTO_INCREMENT,
  `disponibilidadeREALIZACAO` VARCHAR(45) NOT NULL,
  `ANUNCIOS_idANUNCIO` INT NOT NULL,
  PRIMARY KEY (`idSERVICO`),
  UNIQUE INDEX `idSERVICO_UNIQUE` (`idSERVICO` ASC) VISIBLE,
  INDEX `fk_SERVICO_ANUNCIOS1_idx` (`ANUNCIOS_idANUNCIO` ASC) VISIBLE,
  CONSTRAINT `fk_SERVICO_ANUNCIOS1`
    FOREIGN KEY (`ANUNCIOS_idANUNCIO`)
    REFERENCES `mydb`.`ANUNCIOS` (`idANUNCIO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
