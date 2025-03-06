/*
  Warnings:

  - Added the required column `id_driver` to the `Detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_truck` to the `Detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Detail" ADD COLUMN     "id_driver" INTEGER NOT NULL,
ADD COLUMN     "id_truck" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_id_truck_fkey" FOREIGN KEY ("id_truck") REFERENCES "Truck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_id_driver_fkey" FOREIGN KEY ("id_driver") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
