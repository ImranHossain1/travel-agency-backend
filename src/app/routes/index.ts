import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserProfileRoutes } from '../modules/profile/profile.route';

const router = express.Router();

const moduleRoutes = [
  { path: '/auth', route: AuthRoutes },
  { path: '/user', route: UserProfileRoutes },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
