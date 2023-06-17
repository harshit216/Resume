
export interface VersionOneModel{
    iteration:string;
    teamName:string;
    totalLeaves:string;
	totalTeamMembers:string;
	totalWorkingDays:string;
    
 }
 export interface VersionResponse{
     output:VersionOneModel[]
 }