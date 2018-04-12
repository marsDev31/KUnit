import React, { Component } from 'react';
import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import './Search.css'
import axios from 'axios'
import Table from './table'
import MyJson from './long.json'

class Search extends Component{
    constructor(props){
        super(props)
          this.state={
            selectedOption: "[[0,0,0,0,0,0],[],[],[],[],[]]",
            table: "[]",
            wordS: "Search",
            programTable: "[{1:" +  "\""+"Wellness"+  "\""+",2:" + "0" +"},"+"{1:" +  "\""+"Entrepreneursship"+  "\""+",2:" + "0" +"},"+"{1:" +  "\""+"Thai Citizen and Global Citizen"+  "\""+",2:" +  "0"+"},"+"{1:" +  "\""+"Language and Communication"+  "\""+",2:" +  "0"+"},"+"{1:" +  "\""+"Aesthetics"+  "\""+",2:" + "0"+"},"+"{1:" +  "\""+"Sum"+  "\""+",2:" +  "0"+"}]"
          }
        this.handleChange=this.handleChange.bind(this)
        this.handleData=this.handleData.bind(this)
        this.major=this.major.bind(this)
        this.handleChangeDelete=this.handleChangeDle.bind(this)
    }
    
    handleChangeDle = (e) =>{
        if(e != ""){
            var Url = "http://139.59.111.79:5000/remove/"+this.state.selectedOption+"d"+e
            var xmlHttp = new XMLHttpRequest()
            xmlHttp.open("GET",Url,false)
            xmlHttp.send(null)
            var data = xmlHttp.responseText.replace("{\"data\" : ", "").replace("}", "") 
            this.setState({selectedOption: data},()=>{this.handleData()})
           }  
    }
    
    major = (e) =>{
        switch (e) {
            case "1":
                return "Wellness"
                
            case "2":
                return "Entrepreneursship"
                
            case "3":
                return "Thai Citizen and Global Citizen"
                
            case "4":
                return "Language and Communication"
                
            case "5":
                return"Aesthetics"
                
            }
        
    }

    handleData = () =>{
        var i
        var selected = eval(this.state.selectedOption)
        var newTablej = ""
        var  newTablei ="" 
        var len = selected.length
        
        for (i = 1; i<len;i++){
            var j
            var len1 = selected[i].length
            
            for(j=0; j< len1;j++){
                
                var sub = selected[i][j]
                
                var major = ",{major:" + "\""+ MyJson[sub][0]+ "\""
                var subject = ",subject:" + "\""+ MyJson[sub][1] + "\""
                var subjectid = ",subjectid:" + "\""+ sub + "\""
                var credit = ",credit:" + "\""+ MyJson[sub][3] + "(" + MyJson[sub][4] + ")" + "\""
                var by = ",by:"+ "\"" + MyJson[sub][5]+ "\""
                var del = ",del:"+ "\"" +"delete"+ "\""+"}"
                var newTablej  = newTablej+major+subject+subjectid+credit+by+del
            }
            
            var newTablei=newTablei+newTablej
            var newTablej=""
            
        }
        this.setState({table : "["+newTablei+"]"})
        
        var Program= this.state.program
        var Wellness = "{1:" +  "\""+"Wellness"+  "\""+",2:" +  "\""+eval(this.state.selectedOption)[0][1]+ "\""+"},"
        var Entrepreneursship = "{1:" +  "\""+"Entrepreneursship"+  "\""+",2:" +  "\""+eval(this.state.selectedOption)[0][2]+ "\""+"},"
        var Thai = "{1:" +  "\""+"Thai Citizen and Global Citizen"+  "\""+",2:" +  "\""+eval(this.state.selectedOption)[0][3]+ "\""+"},"
        var Language = "{1:" +  "\""+"Language and Communication"+  "\""+",2:" +  "\""+eval(this.state.selectedOption)[0][4]+ "\""+"},"
        var Aesthetics = "{1:" +  "\""+"Aesthetics"+  "\""+",2:" +  "\""+eval(this.state.selectedOption)[0][5]+ "\""+"},"
        var All = "{1:" +  "\""+"Sum"+  "\""+",2:" +  "\""+eval(this.state.selectedOption)[0][0]+ "\""+"}"
        this.setState({programTable: "["+Wellness+Entrepreneursship+Thai+Language+Aesthetics+All+"]"})
    }

    handleChange = (e) => {
        if (this.state.selectedOption.indexOf(e.value) == -1) {
            this.setState({wordS : e.label})
            var Url = "http://139.59.111.79:5000/add/"+this.state.selectedOption+"a"+e.value 
            axios.get(Url)
            .then(res =>{
            this.setState({selectedOption: res.data.replace("{\"data\" : ", "").replace("}", "") })
            this.handleData()   
            })   
        }else{
            alert("This subject has been selected.")
        }
    }
    render(){
        const options = [
            { value: '01175111', label: '01175111 Track and Field for Health' },
{ value: '01175112', label: '01175112 Badminton for Health' },
{ value: '01175113', label: '01175113 Tennis for Health' },
{ value: '01175114', label: '01175114 Table Tennis for Health' },
{ value: '01175115', label: '01175115 Meditation with Shooting Activity' },
{ value: '01175117', label: '01175117 Meditation with Archery Activity' },
{ value: '01175121', label: '01175121 Basketball for Health' },
{ value: '01175122', label: '01175122 Soccer for Health' },
{ value: '01175123', label: '01175123 Volleyball for Health' },
{ value: '01175124', label: '01175124 Handball for Health' },
{ value: '01175125', label: '01175125 Softball for Health' },
{ value: '01175126', label: '01175126 Takraw for Health' },
{ value: '01175127', label: '01175127 Hockey for Health' },
{ value: '01175128', label: '01175128 Rugby Football for Health' },
{ value: '01175129', label: '01175129 Futsal for Health' },
{ value: '01175131', label: '01175131 Swimming for Health' },
{ value: '01175133', label: '01175133 Diving' },
{ value: '01175134', label: '01175134 Water Polo' },
{ value: '01175141', label: '01175141 Aerobic Dance for Health' },
{ value: '01175142', label: '01175142 Folk Dance by Local Culture for Health' },
{ value: '01175143', label: '01175143 Social Dance for Health' },
{ value: '01175144', label: '01175144 Thai Classical Dance for Health' },
{ value: '01175151', label: '01175151 Martial Art with Thai Sword' },
{ value: '01175152', label: '01175152 Martial Art with Fencing' },
{ value: '01175153', label: '01175153 Martial Art with Thai Boxing' },
{ value: '01175154', label: '01175154 Martial Art with Boxing' },
{ value: '01175155', label: '01175155 Martial Art with Judo' },
{ value: '01175156', label: '01175156 Martial Art with Aikido' },
{ value: '01175157', label: '01175157 Martial Art with Krabi-Krabong' },
{ value: '01175159', label: '01175159 Martial Art with Karate' },
{ value: '01175161', label: '01175161 Brain Training with Playing Bridge' },
{ value: '01175162', label: '01175162 Bowling for Health' },
{ value: '01175163', label: '01175163 Golf for Health' },
{ value: '01175164', label: '01175164 Cycling for Health' },
{ value: '01175165', label: '01175165 Weight Training for Health' },
{ value: '01175166', label: '01175166 Martial Art with Taekwondo' },
{ value: '01175168', label: '01175168 Jogging for Health' },
{ value: '01175169', label: '01175169 Exercise for developing Holistic Health' },
{ value: '03768111', label: '03768111 Pe’tanque' },
{ value: '03768112', label: '03768112 Weight Training' },
{ value: '03768121', label: '03768121 Basketball' },
{ value: '03768141', label: '03768141 Thai Classical and Social Dances' },
{ value: '03768151', label: '03768151 Sword and Pole Fighting' },
{ value: '01173151', label: '01173151 AIDS Education' },
{ value: '01174231', label: '01174231 Introduction to Recreation' },
{ value: '01387101', label: '01387101 The Art of Living with Others' },
{ value: '01387103', label: '01387103 Philosophy of Sufficiency Economics and Buddhism' },
{ value: '01459101', label: '01459101 Psychology for Modern Life' },
{ value: '01459102', label: '01459102 Psychology and Human Diversity' },
{ value: '01999011', label: '01999011 Food for Mankind' },
{ value: '01999012', label: '01999012 Health for Life' },
{ value: '01999033', label: '01999033 Arts of Living' },
{ value: '01999036', label: '01999036 Happiness amongst Life Dynamics' },
{ value: '01999048', label: '01999048 Innovation for Environment and Health' },
{ value: '01999213', label: '01999213 Environment, Technology and Life' },
{ value: '02032303', label: '02032303 Agriculture and Quality of Life' },
{ value: '02999044', label: '02999044 Sufficiency Economy for Living' },
{ value: '02999045', label: '02999045 Enhancement of Living Value Through Rural Community Path' },
{ value: '04401112', label: '04401112 Personality and Social Etiquette for Community Service' },
{ value: '04804311', label: '04804311 Philosophy of Sufficiency Economy' },
{ value: '01005101', label: '01005101 Modern Agriculture Technology' },
{ value: '01132101', label: '01132101 Modern Entrepreneur' },
{ value: '01200101', label: '01200101 Innovative Thinking' },
{ value: '01999041', label: '01999041 Economics for Better Living' },
{ value: '01999043', label: '01999043 Creativity for Value Management' },
{ value: '02717011', label: '02717011 Self and Self Development' },
{ value: '03600014', label: '03600014 Creative Problem Solving and Critical Thinking Skills' },
{ value: '03757123', label: '03757123 Mathematics for Business' },
{ value: '01999111', label: '01999111 Knowledge of the Land' },
{ value: '01001317', label: '01001317 Kings and State Leaders on Agricultural Sector Development' },
{ value: '01015202', label: '01015202 Thai Lives Agiculture' },
{ value: '01174122', label: '01174122 Recreational Learning through Backpack Traveling' },
{ value: '01350101', label: '01350101 Ways of Life and Culture in ASEAN' },
{ value: '01387104', label: '01387104 Philosophy and Religion in ASEAN Countries' },
{ value: '01390102', label: '01390102 Creative Tourism' },
{ value: '01450101', label: '01450101 Thai Society and ASEAN Community in Today\'s World' },
{ value: '01455101', label: '01455101 World Politics in Daily Life' },
{ value: '01460101', label: '01460101 Contemporary Thai Society and Culture' },
{ value: '01999031', label: '01999031 Thai Heritage of World Civilization' },
{ value: '01999032', label: '01999032 Thai Studies' },
{ value: '01999046', label: '01999046 National Security Development' },
{ value: '01999047', label: '01999047 Military for Country Development' },
{ value: '01999141', label: '01999141 Man and Society' },
{ value: '02999042', label: '02999042 Student Development' },
{ value: '02999144', label: '02999144 Life Skills for Undergraduate Student' },
{ value: '02999147', label: '02999147 The Thai in ASEAN Dynamics' },
{ value: '03751112', label: '03751112 Social and Politics' },
{ value: '04804115', label: '04804115 Volunteer Spirit for Community Development' },
{ value: '01361101', label: '01361101 Introductory Thai Usage' },
{ value: '01361102', label: '01361102 Thai Pratical Writing' },
{ value: '01361222', label: '01361222 Thai Critical Reading' },
{ value: '02701011', label: '02701011 Thai Usage for Business, Science and Technology' },
{ value: '01999021', label: '01999021 Thai Language for Communication' },
{ value: '01354311', label: '01354311 Khmer l' },
{ value: '01354312', label: '01354312 Khmer ll' },
{ value: '01354411', label: '01354411 Khmer lll' },
{ value: '01355111', label: '01355111 Foundation English l' },
{ value: '01355112', label: '01355112 Foundation English ll' },
{ value: '01355113', label: '01355113 Foundation English lll' },
{ value: '01355114', label: '01355114 English for Pre-Medical Students l' },
{ value: '01355115', label: '01355115 English for Pre-Medical Students ll' },
{ value: '01355201', label: '01355201 Fundamental English Reading' },
{ value: '01355202', label: '01355202 Fundamental English Writing' },
{ value: '01355203', label: '01355203 Fundamental English Structure' },
{ value: '01355204', label: '01355204 Fundamental English Listening-Speaking' },
{ value: '01355205', label: '01355205 Reading for Mass Communication in English' },
{ value: '01355206', label: '01355206 Technical English' },
{ value: '01355207', label: '01355207 English Correspondence' },
{ value: '01355208', label: '01355208 English through Songs' },
{ value: '01355209', label: '01355209 Communicative English for Careers' },
{ value: '01355302', label: '01355302 Report Writing in English' },
{ value: '01355303', label: '01355303 English for Employment' },
{ value: '01356101', label: '01356101 Elementary French l' },
{ value: '01356102', label: '01356102 Elementary French ll' },
{ value: '01356103', label: '01356103 Elementary French lll' },
{ value: '01356104', label: '01356104 Elementary French lV' },
{ value: '01357111', label: '01357111 Elementary German l' },
{ value: '01357112', label: '01357112 Elementary German ll' },
{ value: '01357113', label: '01357113 Elementary German lll' },
{ value: '01357114', label: '01357114 Elementary German lV' },
{ value: '01358101', label: '01358101 Elementary Japanese l' },
{ value: '01358102', label: '01358102 Elementary Japanese ll' },
{ value: '01358103', label: '01358103 Elementary Japanese lll' },
{ value: '01358104', label: '01358104 Elementary Japanese lV' },
{ value: '01362101', label: '01362101 Chinese l' },
{ value: '01362102', label: '01362102 Chinese ll' },
{ value: '01362103', label: '01362103 Chinese lll' },
{ value: '01362104', label: '01362104 Chinese lV' },
{ value: '01362105', label: '01362105 Chinese V' },
{ value: '01367311', label: '01367311 Myanmar Language l' },
{ value: '01367312', label: '01367312 Myanmar Language ll' },
{ value: '01367411', label: '01367411 Myanmar Language lll' },
{ value: '01395101', label: '01395101 Communicative Korean l' },
{ value: '01395102', label: '01395102 Communicative Korean ll' },
{ value: '01395103', label: '01395103 Communicative Korean lll' },
{ value: '01395104', label: '01395104 Communicative Korean lV' },
{ value: '01395105', label: '01395105 Korean Reading and Oral Report' },
{ value: '01398101', label: '01398101 Communicative Malayu l' },
{ value: '01398102', label: '01398102 Communicative Malayu ll' },
{ value: '01398103', label: '01398103 Communicative Malayu lll' },
{ value: '01398104', label: '01398104 Communicative Malayu lV' },
{ value: '01398105', label: '01398105 Malayu Reading' },
{ value: '01398106', label: '01398106 Malayu Listening and Speaking' },
{ value: '01399101', label: '01399101 Communicative Vietnamese l' },
{ value: '01399102', label: '01399102 Communicative Vietnamese ll' },
{ value: '01399103', label: '01399103 Communicative Vietnamese lll' },
{ value: '01399104', label: '01399104 Communicative Vietnamese lV' },
{ value: '01399105', label: '01399105 Vietnamese Reading' },
{ value: '01399106', label: '01399106 Vietnamese Listening and Speaking' },
{ value: '02724011', label: '02724011 Intercultural Communication' },
{ value: '03754111', label: '03754111 Foundation English l' },
{ value: '03754112', label: '03754112 Foundation English ll' },
{ value: '03754113', label: '03754113 Foundation English lll' },
{ value: '03754271', label: '03754271 English for Careers' },
{ value: '01371111', label: '01371111 Information Media' },
{ value: '01418111', label: '01418111 Computer Application' },
{ value: '01999013', label: '01999013 New Age Information Management In Everyday Life' },
{ value: '02729102', label: '02729102 Computer Application in Everyday Life' },
{ value: '03752111', label: '03752111 Information Resources for Research' },
{ value: '01007101', label: '01007101 Horticulture for life Quality and Environment' },
{ value: '01009102', label: '01009102 Agricultural Resources and Environment' },
{ value: '01240011', label: '01240011 Design in Everyday Life' },
{ value: '01255101', label: '01255101 Man and Sea' },
{ value: '01376101', label: '01376101 Literature and Life' },
{ value: '01420201', label: '01420201 Gems and Jewelry' },
{ value: '01999034', label: '01999034 Art Perception' },
{ value: '01999035', label: '01999035 Music Culture in Life' },
{ value: '02708102', label: '02708102 Literature and Science' },
{ value: '03600012', label: '03600012 Green Technology' },
{ value: '03751111', label: '03751111 Man and Environment' , clearableValue: false},
        ];
    const filterOptions = createFilterOptions({ options });
    let { selectedOption } = this.state
    const value = selectedOption && selectedOption.value;
		return(
        <div className="Search">
            <p/>
                <Select
                    name="subject"
                    autosize={false}
                    value={value}
                    placeholder={this.state.wordS}
                    onChange={this.handleChange}
                    options={options}
                    filterOptions={filterOptions}
                    style={{ fontSize: 15 }}
                />
                <br/>
                <Table table={this.state.table} selectedOption={this.state.selectedOption} programTable={this.state.programTable} del={this.handleChangeDelete}/>        
		</div>
        );
    }
}

export default Search;
