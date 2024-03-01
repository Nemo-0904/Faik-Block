// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract local {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    //Product details

    struct Product {
        string name;
        string name_of_company;
        address payable company_owner;
        string expiry;
        uint uuid;
        uint256 cost; //This is in ether too
        bool sold; // By default it is false only
    }

    mapping(uint256 => Product) public no_of_products;
    uint256 public  nth_product = 0;

   

    Product[] public arr;

    //Registering new prodcuts


    function register(
        string memory _name,
        string memory _name_of_company,
        address payable _company_owner,
        string memory _expiry,
        uint256 _uuid,
        uint256 _cost 
    ) public payable {
        Product storage newproduct = no_of_products[nth_product];
        nth_product++;
        
        newproduct.name = _name;
        newproduct.name_of_company = _name_of_company;
        newproduct.company_owner = _company_owner;
        newproduct.expiry = _expiry;
        newproduct.uuid = _uuid;
        newproduct.cost = _cost;

        arr.push(newproduct);
        require(
            msg.value == 0.01 ether,
            "Please pay "
        );
    }


    //Payment 

    function pay(uint256 _id) public payable {
        Product storage thisproduct = no_of_products[_id];
        require(thisproduct.sold == false, "Product is already sold");
        require(msg.value == thisproduct.cost , "Please pay exact amount");
        thisproduct.sold = true;
        thisproduct.company_owner.transfer(thisproduct.cost); //Paying the company owner
        arr[_id] = thisproduct;
    }

    function getter() public view returns(Product[] memory){
        return arr;
    } 
    
}
