export default interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
  }

  export interface ResponseModel {
    successful: boolean,
    message: string,
    data: any,
}