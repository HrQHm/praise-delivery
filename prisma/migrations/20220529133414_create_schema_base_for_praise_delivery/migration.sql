-- CreateTable
CREATE TABLE "deliveryman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "deliveryman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deliveries" (
    "id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_deliveryman" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_username_key" ON "deliveryman"("username");

-- CreateIndex
CREATE UNIQUE INDEX "clients_username_key" ON "clients"("username");

-- CreateIndex
CREATE UNIQUE INDEX "deliveries_item_name_key" ON "deliveries"("item_name");

-- CreateIndex
CREATE UNIQUE INDEX "deliveries_id_client_key" ON "deliveries"("id_client");

-- CreateIndex
CREATE UNIQUE INDEX "deliveries_id_deliveryman_key" ON "deliveries"("id_deliveryman");

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
