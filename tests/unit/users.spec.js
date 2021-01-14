import { shallowMount } from '@vue/test-utils'
import Users from '@/components/Users.vue'

describe('Users.vue', () => {
 
 // renders users
    it('renders user', () => {
            
        const users = [
            
                {
                    gender: "male",
                    name: {
                        title: "Mr",
                        first: "Willie",
                        last: "Jackson"
                    },
                    location: {
                        street: {
                            number: 673,
                            name: "Photinia Ave"
                        },
                        city: "Albany",
                        state: "Western Australia",
                        country: "Australia",
                        postcode: 4065,
                        coordinates: {
                            latitude: "-84.8091",
                            longitude: "-60.8374"
                        },
                        timezone: {
                            offset: "-10:00",
                            description: "Hawaii"
                        }
                    },
                    email: "willie.jackson@example.com",
                    login: {
                        uuid: "f71190e2-2b7f-417b-9e05-41b7bf99902a",
                        username: "angrygoose348",
                        password: "thumb",
                        salt: "jQB8gER3",
                        md5: "c8cb56cb54e0d5bc8db0b0d629f8b401",
                        sha1: "144b8827ebf4d2b9a756a60b9e9b4b8bb5ee9856",
                        sha256: "39bf08fe42c7e4c370e74e11a7f8a8172a184c1e23586f194fb3884897326be4"
                    },
                    dob: {
                        date: "1950-09-07T08:40:52.033Z",
                        age: 71
                    },
                    registered: {
                        date: "2014-11-08T02:48:38.077Z",
                        age: 7
                    },
                    phone: "07-9655-0161",
                    cell: "0449-927-437",
                    id: {
                        name: "TFN",
                        value: "540499298"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/44.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg"
                    },
                    nat: "AU"
                },
                {
                    gender: "male",
                    name: {
                        title: "Mr",
                        first: "Guy",
                        last: "Wade"
                    },
                    location: {
                        street: {
                            number: 7025,
                            name: "Albert Road"
                        },
                        city: "Dunboyne",
                        state: "Louth",
                        country: "Ireland",
                        postcode: 93644,
                        coordinates: {
                            latitude: "-61.5370",
                            longitude: "-4.7357"
                        },
                        timezone: {
                            offset: "-1:00",
                            description: "Azores, Cape Verde Islands"
                        }
                    },
                    email: "guy.wade@example.com",
                    login: {
                        uuid: "ee4c75c8-706f-4f4f-96a2-6e6b059e9da4",
                        username: "sadfrog937",
                        password: "earthlink",
                        salt: "LZNtkw0u",
                        md5: "4b2f6de19a12ed24f03f46a9761c8051",
                        sha1: "a9b58a23bf8de7fdd54e21901b1cde03a8875bfa",
                        sha256: "4689449babe049027c56dcc2edd57723a276b758306dddd133eded78ca589f2b"
                    },
                    dob: {
                        date: "1990-01-18T17:38:23.123Z",
                        age: 31
                    },
                    registered: {
                        date: "2011-05-26T03:14:56.293Z",
                        age: 10
                    },
                    phone: "031-709-3383",
                    cell: "081-228-5969",
                    id: {
                        name: "PPS",
                        value: "4198825T"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/98.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg"
                    },
                    nat: "IE"
                },
               
        ]

        const wrapper = shallowMount(Users, {
            propsData: { users }
        })
         expect(wrapper.text()).toContain(users[0].name.first) 
            expect(wrapper.text()).toContain(users[1].name.first) 
    })

    // checks Users is a component.
    it('Users is a component', () => {

        const wrapper = shallowMount(Users)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
       
   
})