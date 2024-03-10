// properly implement this controller function using the appropriate types
import { Request, Response } from 'express'
import { TeamService } from '../../services/team.service'

export const getMemberbyId = (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const team = TeamService.findById(id)
    if (team)
        res.status(200).json(team)
    else
        res.status(404).send('Team not founde')
}
export const getTeamMembers =  (req: Request, res: Response) => {
    const resp =  TeamService.findAll()
    if (resp)
        res.status(200).json(resp)
    else
        res.status(404).send('Team not found')
}

export const getMemberbyName = (req: Request, res: Response) => {
    const name = req.params.name
    const machingTeams = TeamService.findByNameMatch(name);
    res.status(200).json(machingTeams)

}
export const addTeamMember = (req: Request, res: Response) => {
    const team = req.body;
    TeamService.add(team)
    res.status(201).send('Team Member added')

}
export const removeTeamMember = (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    let result=TeamService.remove(id)
    res.status(200).json({data:'Team Member removed',Team :result})

}
