

export default function fakeApiRequest(time: number){

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            resolve(true)
        },time);

    })

}