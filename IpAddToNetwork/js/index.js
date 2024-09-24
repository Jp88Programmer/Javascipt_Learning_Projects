console.log("IPV4 Network and Broadcast address");
/*
    the steps of application work 

    1.ip address input text input the string and convert numerical form 
    2.calucation of ip address and convert broand cast and network address
    3.add the input field of broad and network address 
    
*/

// 1.ip address input text input the string and convert numerical form 

//fetch the button
let btCalculate = document.getElementById('calculate');

//the event of caluculation 
btCalculate.addEventListener('click',calculate);

/*

    main calculation finding network and broadcast address 

    network address = ip-address AND subnetmask

        ->here ip-address and subnetmask are form of 4 byte decimal number system 
    
    broadcast-address = network-address OR (255 XOR subnetmask)

        ->here 255 is 8 bit (all bits 1s) maximum number 
        ->here network-address and subnetmask are form of 4 byte decimal number system 
        
    Fetch to webpage network-address and broadcast-address 

*/

function calculate() {

    //its value string form to input from webpage (ip-address)
    let ipAddress = document.getElementById('ip-address').value ;

    //its value string form to input from webpage (ip-address)
    let subnetMask= document.getElementById('subnet-mask').value ;

    //dividend ip-address by . and spilt subnet mask by / 
    let ipOctent = ipAddress.split('.');
    let maskString = subnetMask.split('/');

    //Convert mask's netid length to ipv4 address and assign as array of length four 
    let maskV4 = subnetMaskV4(parseInt(maskString));
    console.log(maskV4);

    //return network-address add joing . and assign as string
    let networkAddress = getNetworkAddress(ipOctent,maskV4).join('.');

    //return broadcast-address add joing . and assign as string
    let broadcastAddress = getNetworkAddress(ipOctent,maskV4).join('.');

    //fetch the webpage to input field 
    let networkAddressInputHtml = document.getElementById('network-address');
    let broadAddressInputHtml = document.getElementById('broadcast-address');

    //append network and broadcast input field 
    networkAddressInputHtml.value = networkAddress ;
    broadAddressInputHtml.value = broadcastAddress ;

}

//return the network address as number array to decimal form 
function getNetworkAddress(ipAddress,subnetMask) {
    
    //network octent reprentation
    let networkAddress = [] ;
    
        for (let i = 0; i < 4 ; i++) {
            
            networkAddress.push(parseInt(ipAddress[i]) & subnetMask[i]) ;

    }
    return networkAddress ;
}

function getbroadcastAddress(networkAddress,subnetMask) {
    
    //maximum 8-bit value to use broandcast operation
    const HIGHESTEIGHTHBIT = 255 ;

    //broandcast octent reprentation
    let broadcastAddress = [] ;
    
        for (let i = 0; i < 4 ; i++) {
            
            broadcastAddress.push(networkAddress[i] | ( HIGHESTEIGHTHBIT ^  subnetMask[i] )) ;

    }
    return broadcastAddress ;
}

//its convert the length of netid to ipv4 ex(255.255.255.0) 
function subnetMaskV4(lengthOfNetId) {
    
    //32-bit reprentation 
    let bits = [];

    //8-bit octent to decimal number conversion store
    let subnetMaskToDec = [];

    for (let index = 0; index < 32; index++) {
        if (index < lengthOfNetId) {
            
            bits.push('1');

        }
        else{

            bits.push('0');

        }
    }

    subnetMaskToDec[0] = binaryToDecimal(bits,0,7);
    subnetMaskToDec[1] = binaryToDecimal(bits,8,15);
    subnetMaskToDec[2] = binaryToDecimal(bits,16,23);
    subnetMaskToDec[3] = binaryToDecimal(bits,24,31);

    return subnetMaskToDec ;

}

//its convert binary number to decimal number  from string to number form
function binaryToDecimal(array,startingIndex,endingIndex) {
    
    //denoteing 2's power 
    let twoPower = 1 ;

    //decimal number 
    let decimal = 0 ;

    for (let index = endingIndex ; index >= startingIndex ; index--) {
        
        decimal += array[index] * twoPower ;
        twoPower *= 2 ;
        
    }
    return decimal ;
}
