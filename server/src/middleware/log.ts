export const log = async (ctx: any, next: any) => {
  // Log the request to the console
  console.log('Url:', ctx.url)
  // Pass the request to the next middleware function
  await next()
}
