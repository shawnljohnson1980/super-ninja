class Ninja {
    constructor(name, health, speed, stealth, strength) {
        this.name = name;
        this.health = health;
        this.stealth = stealth;
        this.speed = speed;
        this.strength = strength;

    }

    drinkSake() {
        this.health += 10
        console.log(`${this.name}', drank Sake and his health is now increased by 10`)
    }
    sayName() {
        console.log(`My Name is ${this.name}, and I am a master ninja!`)
    }
    showStats() {
        console.log(`${this.name}'s, health is ${this.health}, speed is ${this.speed}, stealth is ${this.stealth}, strength is ${this.strength}..`)
        if (this.wisdom) {
            console.log(`Wisdom is ${this.wisdom}`)
        }
    }
}
class NinjaSensei extends Ninja {
    constructor(wisdom) {
        super("Master Splinter", 130, 25, 25, 35, 10)
        this.wisdom = wisdom
    }
    speakWisdom() {
        var quote = ["The path that leads to what we truly desire is long and difficult, but only by following that path do we achieve our goal", "A wise person embraces as many new experiences as possible.  When offered a slice of pizza..", "The wise person also recognizes that some experiences are less embraceable than others.", "There are times when right overrules rules, my son", "I do not wish to fight. But cast a stone into the lake, and the ripples will return to you", "If you look for happiness outside of yourself, you'll never find it. Happiness exists only within you", "Pride in one's work is an excellent quality, but it most not be carried to excess.", "I see you have already forgotten your lesson.There is room in this world for all different personalities, some light-hearted, some serious.  Think of how boring it would be, if all of us were identical ", "Possess the right thinking. Only then can one receive the gifts of strength, knowledge, and peace.", "Anger clouds the mind. Turned inward, it is an unconquerable enemy.", "You are unique among your brothers, for you choose to face this enemy alone. But as you face it, do not forget them, and do not forget me. I am here, my son.", "Tonight you have learned the final and greatest truth of the Ninja: that ultimate mastering comes not from the body, but from the mind. Together, there is nothing your four minds cannot accomplish.", "Some say that the path from inner turmoil begins with a friendly ear.  My ear is open if you care to use it.", "Running into battle without knowledge or preparation is foolish. Sometimes it is best to sit still. The answers will come.", "Sometimes you must follow your heart even if others tell you not to.", "A creative mind must be balanced by a disciplined body. We must learn stillness and alertness. For they are the only defense against the unexpected.", "Darkness gives the ninja power, while light reveals the ninja's presence.", "It is not the student's place to say when a lesson is learned. The student's place is to listen and learn.", "Sometimes the past is a mirror in which we can see the reflection of what danger the future holds.", "Let your mind become pool of stillness. Break the surface explore the deeps for that is where the true wonders lies.", "A wise ninja does not seek out an enemy who he does not fully understand.", "The two greatest weapons at the ninja disposal are placement and surprise.", "I am hearing answers that raise more questions. A wise strategist gathers all his information before deciding on a course of action.", "There are no excuses when you are the leader, my student.", "Your own anger defeats you from the inside out.", "If you think too much about what is coming, you will lose sight of what is. You must be fully in the moment so you can fight without thinking.", "You must find the spaces between your thoughts and learn to live there.", "No plan ever survives contact with the enemy. It is how you react to the unexpected that will determine if you succeed.", "The first rule of the Ninja is to do no harm. Unless you mean to do harm, then do LOTS of harm.", "After all of this time, I have learned that revenge only leads to more pain.", "We choose what holds us back and what moves us forward.", "Technology is a means, not and end. It is you who must prevail in battle, not your weapon.", "Leadership is not about being appreciated, it is about responsibility. It doesn't matter that the burden is heavy, It matters that you carry it.", "You're too busy trying to be this unrealistic television captain. Instead you should listen to your mind and heart. Only when you listen to yourself and your brothers will you become the great leader you are destined to be.", "I may not be human, but at least I am fortunate enough to have my humanity.", "There is no monster more dangerous than a lack of compassion.", "My meditation grants me serenity but ear plugs don't hurt either.", "Listen closely my sons. Leonardo, be one with the blade. Donatello, instinct over strategy. Raphael, precision. Michelangelo, control.", "You live, you die, you fight... As brothers. Remember, nothing is as strong as family."]
        this.quote = quote[Math.floor(Math.random() * quote.length)]
        console.log(`${this.quote},  -Master Splinter`);
    }
}
var splinter = new NinjaSensei()
var gaiden = new Ninja("Ryu Hayabusa", 100, 20, 15, 20)
var turtle = new Ninja("Hamato Yoshi", 100, 20, 10, 25)
gaiden.sayName()
turtle.sayName()
splinter.sayName()
splinter.showStats()
gaiden.showStats()
turtle.showStats()
gaiden.drinkSake()
turtle.drinkSake()
splinter.drinkSake()
gaiden.showStats()
turtle.showStats()
splinter.showStats()
splinter.speakWisdom()

