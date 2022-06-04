import { Router } from 'express';
import { ensureAuthenticatedDeliveryman } from '../middlewares/ensureAuthenticatedDeliveryman';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticatedUser';
import { AuthenticateClientController } from '../modules/clients/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';
import { FindAllDeliveriesController } from '../modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllDeliveriesOpeningController } from '../modules/deliveries/useCases/findAllDeliveriesOpening/FindAllDeliveriesOpeningController';
import { UpdateDeliverymanController } from '../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { UpdateEndDateController } from '../modules/deliveries/useCases/updateEndDate/UpdateEndDateController';
import { AuthenticateDeliverymanController } from '../modules/deliveryman/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesDeliverymanController } from '../modules/deliveryman/useCases/FindAllDeliveriesDeliveryman/FindAllDeliveriesDeliverymanController';

const routes = Router();
const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllDeliveriesOpeningController = new FindAllDeliveriesOpeningController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/", createClientController.handle);
routes.post("/client/login/", authenticateClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/deliveryman/login/", authenticateDeliverymanController.handle);
routes.post("/delivery/", ensureAuthenticated, createDeliveryController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticatedDeliveryman, updateDeliverymanController.handle);
routes.put("/delivery/updateEndDate/:id", ensureAuthenticatedDeliveryman, updateEndDateController.handle);
routes.get("/delivery/opening/", ensureAuthenticatedDeliveryman, findAllDeliveriesOpeningController.handle);
routes.get("/client/delivery/", ensureAuthenticated, findAllDeliveriesController.handle);
routes.get("/deliveryman/delivery/", ensureAuthenticatedDeliveryman, findAllDeliveriesDeliverymanController.handle);

export { routes };