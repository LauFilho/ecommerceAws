import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { get } from "http";


export async function handler(event: APIGatewayProxyEvent,
    context: Context): Promise<APIGatewayProxyResult> {

    const lambdaRequestId = context.awsRequestId
    const apiRequestId = event.requestContext.requestId


    console.log(`API Gateway RequestId ->: ${lambdaRequestId} - Lambda RequestId: `)
    
    const method = event.httpMethod
    if (event.resource === "/products") {
        if (method === 'GET') {
            console.log("Metodo recebido é o GET")
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "GET Products - OK"
                })
            }
        }
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: "GET Products - FAIL"
        })
    }
 

}
