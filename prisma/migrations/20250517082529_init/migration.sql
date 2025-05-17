-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "customerName" TEXT NOT NULL,
    "storeName" TEXT,
    "itemDescription" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "decorationType" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "designUrl" TEXT,
    "priority" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
