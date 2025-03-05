/*
  Warnings:

  - You are about to drop the `Companies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Drivers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trucks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Details" DROP CONSTRAINT "Details_id_company_fkey";

-- DropForeignKey
ALTER TABLE "Details" DROP CONSTRAINT "Details_id_order_fkey";

-- DropForeignKey
ALTER TABLE "Drivers" DROP CONSTRAINT "Drivers_id_company_fkey";

-- DropForeignKey
ALTER TABLE "Trucks" DROP CONSTRAINT "Trucks_id_company_fkey";

-- DropTable
DROP TABLE "Companies";

-- DropTable
DROP TABLE "Details";

-- DropTable
DROP TABLE "Drivers";

-- DropTable
DROP TABLE "Orders";

-- DropTable
DROP TABLE "Trucks";

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Truck" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "id_company" INTEGER NOT NULL,

    CONSTRAINT "Truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "id_company" INTEGER NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detail" (
    "id" SERIAL NOT NULL,
    "id_order" INTEGER NOT NULL,
    "id_company" INTEGER NOT NULL,

    CONSTRAINT "Detail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Truck_placa_key" ON "Truck"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_cpf_key" ON "Driver"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_email_key" ON "Driver"("email");

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
