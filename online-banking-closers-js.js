// Create function userCard:

function userCard(cardId) {

    
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: cardId
    };
    return {
        getCardOptions: () => {
            return card
        },
        putCredits: (newBalance) => {
            card.historyLogs.push( {operationType: 'Received credits', credits: newBalance, operationTime: Date()});
            card.balance += newBalance;

        },
        takeCredits: (howMuch) => {
            card.historyLogs.push({operationType: 'Withdrawal of credits', credits: howMuch, operationTime:  Date()});
            card.balance -= howMuch;
            if (howMuch > card.transactionLimit || howMuch > card.balance) {
                throw new Error('Its more then your balance or your limit')
            }
        },
        setTransactionLimit: (newLimit) => {
            card.historyLogs.push({operationType: 'Transaction limit change', credits: newLimit, operationTime:  Date()});

            card.transactionLimit = newLimit
        },
        transferCredits: (sum, cardToReceived) => {
            card.historyLogs[1].credits = sum;
            if (sum > card.transactionLimit || sum > card.balance) {
                throw new Error('Its more then your balance or your limit')
            }

            card.balance = card.balance - sum - (sum * 0.05);
            cardToReceived.putCredits(sum)
        },


    }
}

let card1 = userCard(1);
let card2 = userCard(2);
let card3 = userCard(3);
card1.putCredits(12230);
console.log(card1.getCardOptions());
card1.takeCredits(40);
console.log(card1.getCardOptions());
card2.putCredits(1500);
card3.putCredits(12230);
card2.setTransactionLimit(700);
card3.setTransactionLimit(1140);


console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
console.log(card3.getCardOptions());

// create function userAccount:
let userCard1 = card1.getCardOptions();
let userCard2 = card2.getCardOptions();
let userCard3 = card3.getCardOptions();

function userAccount(userName) {
    let user = {
        name: userName,
        cards: []
    };
    return {
        getUserAccount: () => {
            return user
        },
        addCard: (card1, card2, card3) => {
            user.cards = [card1, card2, card3]
        },
        getCardById: (key) => {

            if (key === userCard1.key) {
                return userCard1
            }
            if (key === userCard2.key) {
                return userCard2
            }
            if (key === userCard3.key) {
                return userCard3
            }
            throw new Error('Enter correct cardId , please!')

        }
    }
}

let andriy = userAccount('Andriy');
andriy.addCard(userCard1, userCard2, userCard3);
console.log(andriy.getUserAccount());
console.log(andriy.getCardById(1));

