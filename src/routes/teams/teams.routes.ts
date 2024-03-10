import express from "express";
export const TeamRouter = express.Router();
import {getMemberbyId,getTeamMembers,getMemberbyName,addTeamMember,removeTeamMember} from '../teams/teams.controller'
// add proper REST endpoints to support Team crud operations
TeamRouter.get('/teams/getMembers', getTeamMembers)
TeamRouter.get('/teams/:id', getMemberbyId)
TeamRouter.get('/teams/name/:name', getMemberbyName)
TeamRouter.post('/teams/addMember', addTeamMember)
TeamRouter.delete('/teams/:id', removeTeamMember)