export type Team = {
  id: number;
  name: string;
};
export const allTeams: Team[] = [
  { id: 1, name: "team 1" },
  { id: 2, name: "team 2" },
  { id: 3, name: "team 3" },
  { id: 4, name: "team 4" },
  { id: 5, name: "team 5" },
  { id: 6, name: "team 6" },
  { id: 7, name: "team 7" },
];
export const TeamService = {
  findById(id: number): Team | undefined {
    return allTeams.find((e)=>e.id==id);;
  },
  findAll(): Team[] {
    return allTeams;
  },
  findByNameMatch(text: string): Team[] {
    return allTeams.filter(e=>e.name.includes(text));
  },
  add(team: Team): void {
    const exists=allTeams.some(e=>e.id===team.id)
    if(!exists)
    allTeams.push(team)
  else
  console.error('This team member already exists')
  },
  remove(id: number): void | Team[]{
    const index=allTeams.findIndex(e=>e.id===id)
    if(index!=-1)
    {
      allTeams.splice(index,1)
      return allTeams
     
    }
   
  else
  console.error('This team member does not exists')

  },
};
