-- CreateTable
CREATE TABLE "Companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trucks" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "id_company" INTEGER NOT NULL,

    CONSTRAINT "Trucks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drivers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "id_company" INTEGER NOT NULL,

    CONSTRAINT "Drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Details" (
    "id" SERIAL NOT NULL,
    "id_order" INTEGER NOT NULL,
    "id_company" INTEGER NOT NULL,

    CONSTRAINT "Details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Companies_email_key" ON "Companies"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Trucks_placa_key" ON "Trucks"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Drivers_cpf_key" ON "Drivers"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Drivers_email_key" ON "Drivers"("email");

-- AddForeignKey
ALTER TABLE "Trucks" ADD CONSTRAINT "Trucks_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Drivers" ADD CONSTRAINT "Drivers_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Details" ADD CONSTRAINT "Details_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Details" ADD CONSTRAINT "Details_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
