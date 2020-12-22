import { shallowMount, mount } from '@vue/test-utils'
import JobCard from '@/components/JobCard.vue'

describe('JobCard.vue', () => {
  it('renders job title when passed', () => {
    const objective = 'Freelance Thumbnail Specialist (TheGamer)'
    const wrapper = mount(JobCard, {
      propsData: { job:{
        compensation: {data: {code: "range", currency: "USD$", minAmount: 15, maxAmount: 30, periodicity: "hourly"}},
        context: {signaled: []},
        deadline: "2020-12-30T04:30:00.000Z",
        external: false,
        id: "Owb4Pzro",
        locations: ["United States", "Canada"],
        members: [{subjectId: "218202", name: "Ana Varela", username: "AnaVarela"}],
        objective: "Freelance Thumbnail Specialist (TheGamer)",
        organizations: [{id: 553700, name: "Valnet", picture: "https://torre-media.s3-us-west-2.amazonaws.com/Valnet.png"}],
        questions: [],
        remote: true,
        skills: [{name: "Thumbnail", experience: "1-plus-year"}, {name: "Photoshop", experience: "1-plus-year"}],
        status: "open",
        type: "freelance-gigs"
      },
      currentSelectedJob:{
        compensation: {data: {code: "range", currency: "USD$", minAmount: 15, maxAmount: 30, periodicity: "hourly"}},
        context: {signaled: []},
        deadline: "2020-12-30T04:30:00.000Z",
        external: false,
        id: "Owb4Pzro",
        locations: ["United States", "Canada"],
        members: [{subjectId: "218202", name: "Ana Varela", username: "AnaVarela"}],
        objective: "Freelance Thumbnail Specialist (TheGamer)",
        organizations: [{id: 553700, name: "Valnet", picture: "https://torre-media.s3-us-west-2.amazonaws.com/Valnet.png"}],
        questions: [],
        remote: true,
        skills: [{name: "Thumbnail", experience: "1-plus-year"}, {name: "Photoshop", experience: "1-plus-year"}],
        status: "open",
        type: "freelance-gigs"
      } }
    })
    const title =wrapper.find('p')
    expect(title.text()).toMatch(objective)
  })
})
