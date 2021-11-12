### Problem Description:

We at Decagon Train service are building a train management system that takes people to 5 locations[“Abuja", "Benue", "Lagos", "Katsina", "Sambisa"].
You are expected to build a platform that enables us to send equal number of people to this locations irrespective of the number of passengers. We can't send more than 50 passengers in total (our train can only take 50 people per trip to the 5 locations available). If the passengers available exceeds 50, then the remaining passengers are taken into the reservation list, pending if there is a shuffle count available which indicates how many extra trips the train can make per day.

Providing we have passengers < 50, then we would have to assign equal number of passengers to this locations and upon having remianing passengers, they would be taking into reservation list.

Also, providing we have passengers < 5 (length/number of location), then we would have an empty boarding list, with reservation containing the passengers available).

For every extra trip taken shuffle count is decremented while for every trip count is incremented.

### How will I complete this project?

- You are to complete the test in the workdir/_test_/passenger.spec.ts. (express yourself towards how you understand the application)
- Your function should be able to take two argumnts passengers and shuffle.
- Both arguments are of type number.
- Implement a random passenger generator in your solution to create mock passenger details from the number of passengers inputed {name:"passenger0", location:"Sambisa"}.
- expected returned object

```
    {
        boarded:[
           {name:"passenger0", location:"Sambisa"},
           {name:"passenger1", location:"Abuja"},
           {name:"passenger2", location:"Benue"},
           {name:"passenger3", location:"Lagos"},
           {name:"passenger4", location:"Katsina"}
        ],
        reservation:[],
        count:1
    }
```

### Example

1. taskOne(10, 4);
   output:

```
    {
        boarded:[
           {name:"passenger1", location:"Abuja"},
           {name:"passenger2", location:"Benue"},
           {name:"passenger3", location:"Lagos"},
           {name:"passenger4", location:"Katsina"},
           {name:"passenger5", location:"Sambisa"},
           {name:"passenger6", location:"Abuja"},
           {name:"passenger7", location:"Benue"},
           {name:"passenger8", location:"Lagos"},
           {name:"passenger9", location:"Katsina"},
           {name:"passenger10", location:"Sambisa"},
        ],
        reservation:[],
        count:1
    }
```

2. taskOne(14, 4);
   output:

```
    {
        boarded:[
           {name:"passenger1", location:"Abuja"},
           {name:"passenger2", location:"Benue"},
           {name:"passenger3", location:"Lagos"},
           {name:"passenger4", location:"Katsina"},
           {name:"passenger5", location:"Sambisa"},
           {name:"passenger6", location:"Abuja"},
           {name:"passenger7", location:"Benue"},
           {name:"passenger8", location:"Lagos"},
           {name:"passenger9", location:"Katsina"},
           {name:"passenger10", location:"Sambisa"},
        ],
        reservation:[
            {name:"passenger11", location:"Abuja"},
           {name:"passenger12", location:"Benue"},
           {name:"passenger13", location:"Lagos"},
           {name:"passenger14", location:"Katsina"},
        ],
        count:1
    }
```

3. taskOne(55, 4);
   output:

```
    {
        boarded:[
           {name:"passenger51", location:"Abuja"},
           {name:"passenger52", location:"Benue"},
           {name:"passenger53", location:"Lagos"},
           {name:"passenger54", location:"Katsina"},
           {name:"passenger55", location:"Sambisa"},
        ],
        reservation:[],
        count:2
    }
```

4. taskOne(4, 4);
   output:

```
    {
        boarded:[],
        reservation:[
             {name:"passenger1", location:"Abuja"},
           {name:"passenger2", location:"Benue"},
           {name:"passenger3", location:"Lagos"},
           {name:"passenger4", location:"Katsina"},
        ],
        count:0
    }
```

5. taskOne(50, 0);
   output:

```
    {
        boarded:[
           {name:"passenger1", location:"Abuja"},
           {name:"passenger2", location:"Benue"},
           {name:"passenger3", location:"Lagos"},
           {name:"passenger4", location:"Katsina"},
           {name:"passenger5", location:"Sambisa"},
           .... * 45
        ],
        reservation:[],
        count:1
    }
```

### Steps to evaluate.

- Use typescript.
- You are not expected to use `type any`
- Use Rubric as score reference.

### Test Coverage:

- Write test to cover for the described test in the **test** folder
