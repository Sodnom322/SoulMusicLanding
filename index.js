function Click() {
    console.log('hello')
}


const arrayOfScreens = [
    {
        name: "firstScreen",
        content: `
            <div class="screen">
            <div class='info'>
            <h1 class="question">Ваш возраст?</h1>
            <div class='input'>
            <input class='ageInput' id='ageInput' value='14'type='number'></input>
            </div>
            <input type='range' id='rangeSlider' value='14' />
            </div>
            </div>
        `,
    },
    {
        name: "secondScreen",
        content: `
            <div class="screen">
                <h1 class='question'>Сколько раз в неделю вы готовы заниматься?</h1>
                <div class='wrapInput'>
                <div class='containerBox'>
                <div class="checkBoxContainer">
                <input type='checkbox'name="chexBox1" class='checkBox checkBox1' id='chexBox1'>
                </div>
                <label for='chexBox1' class='label'>
                <div class="labelContainer">1 раз в неделю</div></label>
                </div>
                <div class='containerBox'>
                <div class='checkBoxContainer'>
                <input type='checkbox' class='checkBox checkBox1' name="chexBox2" id='chexBox2'>
                </div>
                <label for='chexBox2' class='label'>
                <div class='labelContainer'>2 раза в неделю</div></label>
                </div>
                <div class='containerBox'>
                <div class='checkBoxContainer'>
                <input type='checkbox' name="chexBox3" class='checkBox checkBox1' id='chexBox3'>
                </div>
                <label for='chexBox3' class='label'>
                <div class='labelContainer'>2 раза в неделю</div></label>
                </div>
                <div class='containerBox'>
                <div class='checkBoxContainer'>
                <input type='checkbox'name="chexBox4" class='checkBox checkBox1' id='chexBox4'>
                </div>
                <label for='chexBox4' class='label'>
                <div class='labelContainer'>каждый день</div></label>
                </div>
                </div>
            </div>
        `,
    },
    {
        name: "thirdScreen",
        content: `
            <div class="screen">
                <h1 class='question'>Какие жанры музыки вам нравятся?</h1>
                <div class='wrapInput'>
                <div class='containerBox'>
                <div class='checkBoxContainer'>
                <input type='checkbox' class='checkBox checkBox2' id='chexBox5'>
                </div>
                <label for='chexBox5' class='label'>
                <div class='labelContainer'>Рок</div></label>
                </div>
                <div class='containerBox'>
                <div class='checkBoxContainer'>
                <input type='checkbox' class='checkBox checkBox2' id='chexBox6'>
                </div>
                <label for='chexBox6' class='label'>
                <div class='labelContainer'>Классика</div></label>
                </div>
                <div class='containerBox'>
                <div class='checkBoxContainer'>
                <input type='checkbox' class='checkBox checkBox2' id='chexBox7'>
                </div>
                <label for='chexBox7' class='label'>
                <div class='labelContainer'>Поп</div></label>
                </div>
                <div class='containerBox'>
                <div class='checkBoxContainer'>
                <input type='checkbox' class='checkBox checkBox2' id='chexBox8'>
                </div>
                <label for='chexBox8' class='label'>
                <div class='labelContainer'>Джас</div></label>
                </div>
                <div class='containerBox'>
                <div class='checkBoxContainer'>
                <input type='checkbox' class='checkBox checkBox2' id='chexBox9'>
                </div>
                <label for='chexBox9' class='label'>
                <div class='labelContainer'>Блюз</div></label>
                </div>
                <div class='containerBox'>
                <div class='checkBoxContainer'>
                <input type='checkbox' class='checkBox checkBox2' id='chexBox10'>
                </div>
                <label for='chexBox10' class='label'>
                <div class='labelContainer'>Другое</div></label>
                </div>
                </div>
            </div>
        `,
    },
    {
        name: "fourdScreen",
        content: `
        <div class="screen">
        <h1 class='question'>Есть ли опыт занятия вокала?</h1>
        <div class='wrapInput'>
        <div class='containerBox'>
        <div class='checkBoxContainer'>
        <input type='checkbox' class='checkBox checkBox3' id='chexBox11'>
        </div>
        <label for='chexBox11' class='label'>
        <div class='labelContainer'>Нет опыта</div></label>
        </div>
        <div class='containerBox'>
        <div class='checkBoxContainer'>
        <input type='checkbox' class='checkBox checkBox3' id='chexBox12'>
        </div>
        <label for='chexBox12' class='label1'>
        <div class='labelContainer'>Занимался давно,хочу вспомнить и улучшить навыки</div></label>
        </div>
        <div class='containerBox'>
        <div class='checkBoxContainer'>
        <input type='checkbox' class='checkBox checkBox3' id='chexBox13'>
        </div>
        <label for='chexBox13' class='label1'>
        <div class='labelContainer'>Занимался,но не регулярно</div></label>
        </div>
        <div class='containerBox'>
        <div class='checkBoxContainer'>
        <input type='checkbox' class='checkBox checkBox3' id='chexBox14'>
        </div>
        <label for='chexBox14' class='label1'>
        <div class='labelContainer'>Опытный вокалист,ищу что то новое для себя</div></label>
        </div>
        </div>
    </div>
        `,
    },
    {
        name: "firstScreen",
        content: `
            <div class="screen">
               
            </div>
        `,
    },
    {
        name: "firstScreen",
        content: `
            <div class="screen">
                <p>some text</p>
            </div>
        `,
    },
]
const rangeSlider = document.getElementById('rangeSlider')


const controlPoints = arrayOfScreens.map(() => ({
    isActive: false,
    content: `
        <div class="controlPoint">
        </div>
    `
}))
class Slider {
    activeScreen = 0
    isOpen = false
    isRendered = false
    actualControlPoints = []
    age = 14
    activeCountInWeek = 0
    activeGenre = 0
    activeExperience = 0
    goToNextScreen() {
        if (this.activeScreen >= arrayOfScreens.length - 1) return
        let htmlSlider = document.querySelectorAll('.slider')[0]
        let width = htmlSlider.clientWidth
        let x = this.activeScreen * width
        htmlSlider.scroll(width + x, 0)
        this.activeScreen += 1
        this.render()
    }
    goBack() {
        if (this.activeScreen <= 0) return
        let htmlSlider = document.querySelectorAll('.slider')[0]
        let width = htmlSlider.clientWidth
        let x = this.activeScreen * width
        htmlSlider.scroll(x - width, 0)
        this.activeScreen -= 1
        this.render()
    }
    initialRender() {
        let ourSlider = document.querySelectorAll('.slider')
        let str = arrayOfScreens.map((item) => item.content).join("")
        ourSlider[0].addEventListener('wheel', (e) => {
            console.log("SCroll")
            e.stopPropagation()
            e.preventDefault()
        })
        ourSlider[0].innerHTML = str
        this.actualControlPoints = controlPoints.map((item,index) => ({
            isActive: index === this.activeScreen, 
            content: index === this.activeScreen ?  `
                <div class="controlPoint active">
                </div>
            `:item.content
        }))
        let controlStr = this.actualControlPoints.map((item) => item.content).join("")
        document.getElementById("controlPointBox").innerHTML = controlStr
        document.getElementById("ageInput").addEventListener('keydown', e => {
            e.preventDefault()
            e.stopPropagation()
            this.changeAgeIput(e)
        })
        document.getElementById('rangeSlider').addEventListener('change',e => {
            e.preventDefault()
            e.stopPropagation()
            this.changeAgeRange(e)
        })
        document.querySelectorAll('.checkBox1').forEach((item) => {
            item.addEventListener('change', e => {
                e.preventDefault()
                e.stopPropagation()
                this.changeCountTimesValue(e)
            })
        })
        document.querySelectorAll('.checkBox2').forEach((item) => {
            item.addEventListener('change', e => {
                e.preventDefault()
                e.stopPropagation()
                this.changeCountTimes(e)
            })
        })
        document.querySelectorAll('.checkBox3').forEach((item) => {
            item.addEventListener('change',e => {
                e.preventDefault()
                e.stopPropagation()
                this.changeExperience(e)
            })
        })
    }
    changeExperience(e) {
        document.querySelectorAll('.checkBox3').forEach((item) => {
            console.log(item.id === e.target.id, item.value)
            item.checked = item.id === e.target.id
        })
        console.log(e.target.id)
        this.activeExperience = Number(e.target.id.substring(e.target.length - 1))
    }
   
    changeCountTimes(e) {
       document.querySelectorAll('.checkBox2').forEach((item) => {
        console.log(item.id === e.target.id, item.value)
        item.checked = item.id === e.target.id
       }) 
       console.log(e.target.id)
        this.activeGenre = Number(e.target.id.substring(e.target.length - 1))
    }


    changeCountTimesValue(e) {
        document.querySelectorAll('.checkBox1').forEach((item) => {
            console.log(item.name === e.target.name, item.value)
            item.checked = item.name === e.target.name
        })
        console.log(e.target.name)
        this.activeCountInWeek = Number(e.target.name.substring(e.target.length - 1))
    }
    changeAge(age) {
        let nodeInput = document.getElementById('ageInput')
        let nodeRange = document.getElementById('rangeSlider')
        nodeInput.value = age
        nodeRange.value = age
        console.log(age)
    }
    changeAgeIput(e){
        if (e.key === "Backspace"){
            this.age = Number(String(this.age).substring(0, String(this.age).length - 1))
            this.changeAge(this.age)
            return
        }
        if (isNaN(Number(e.key))) {
            return
        }
        this.age = Number(String(this.age) + e.key)
        this.changeAge(this.age)
    }
    changeAgeRange(e){
        console.log(e.target.value)
        this.changeAge(Number(e.target.value))
    }
    render() {
        this.actualControlPoints = controlPoints.map((item,index) => ({
            isActive: index === this.activeScreen, 
            content: index === this.activeScreen ?  `
                <div class="controlPoint active">
                </div>
            `:item.content
        }))
        let controlStr = this.actualControlPoints.map((item) => item.content).join("")
        document.getElementById("controlPointBox").innerHTML = controlStr
    }
}

let someFunc = (e) => {
    console.log(e)
}
const mySlider = new Slider()

document.addEventListener('DOMContentLoaded', () => {
    mySlider.initialRender()
})
