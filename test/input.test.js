const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    //BDD 行为驱动测试
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props',() =>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接收 value',()=>{
            vm = new Constructor({
                propsData: {
                    value:'1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })
        it('接收 disabled',()=>{

             vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)

        })
        it('接收 value',()=>{

             vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)

        })
        it('接收 value',()=>{

            const vm = new Constructor({
                propsData: {
                    error:'你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
        })
    })
    describe('事件',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持change/input/focus/blur 事件',()=>{
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new  Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                let event = new Event(eventName)
                //浏览器会自动补全target.value，
                // 因此这里需要用Object.defineProperty破坏只读属性
                Object.defineProperty(
                    event,'target',{
                        value:{value:'hi'},enumerable:true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi');
            })
        })
        // it('支持change事件', function () {
        //     vm = new  Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('change',callback)
        //     //触发input的input事件
        //     let event = new Event('change')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event);
        //     expect(callback).to.have.been.calledWith(event);
        // });
        // it('支持input事件',()=>{
        //     vm = new  Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('input',callback)
        //     //触发input的input事件
        //     let event = new Event('input')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event);
        //     expect(callback).to.have.been.calledWith(event);
        // })
        // it('支持focus事件',()=>{
        //     vm = new  Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('focus',callback)
        //     //触发input的change事件
        //     let event = new Event('focus')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event);
        //     expect(callback).to.have.been.calledWith(event);
        // })
        // it('支持blur事件',()=>{
        //     vm = new  Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('blur',callback)
        //     //触发input的change事件
        //     let event = new Event('blur')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event);
        //     expect(callback).to.have.been.calledWith(event);
        // })
    })
})