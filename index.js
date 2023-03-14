const extraBlocks = document.getElementById('extraBlocks');
const locations = document.getElementById('locations');
const location1 = document.getElementById('location1')
const location2 = document.getElementById('location2')
const location3 = document.getElementById('location3')
const others = document.getElementById('others')
const dropdown = document.getElementById('dropdown')
const firstSlot = document.getElementById('firstSlot')
const secondSlot = document.getElementById('secondSlot')
const branchMain = document.getElementById('branchMain')
const branch1 = document.getElementById('branch1')
const branch2 = document.getElementById('branch2')
const branch3 = document.getElementById('branch3')
const otherBranches = document.getElementById('otherBranches')
const otherBranchesMap = document.getElementById('otherBranchesMap')
const branchInSmall = document.getElementById('branchInSmall')
const addres1 = document.getElementById('addres1')
const addres2 = document.getElementById('addres2')
const addres3 = document.getElementById('addres3')


function theEnd() {
    extraBlocks.scrollTo(900, 0);
}

theEnd();

const showLocation = () => {
    others.classList.toggle('active')
}

const changeLocation1 = () => {
    locations.innerHTML = location1.innerHTML;
}

const changeLocation2 = () => {
    locations.innerHTML = location2.innerHTML;
}

const changeLocation3 = () => {
    locations.innerHTML = location3.innerHTML;
}

const showNumber = () => {
    firstSlot.innerHTML = '77'
    secondSlot.innerHTML = '77'

}

const showBranch1 = () => {
    branchMain.innerHTML = branch1.innerHTML
    otherBranches.style.display = 'none'
}

const showBranch2 = () => {
    branchMain.innerHTML = branch2.innerHTML
    otherBranches.style.display = 'none'

}

const showBranch3 = () => {
    branchMain.innerHTML = branch3.innerHTML
    otherBranches.style.display = 'none'

}

const showBranches = () => {
    otherBranches.style.display = 'block';
    otherBranches.style.position = 'absolute';
}

const toLeft = () => {
    extraBlocks.scrollTo(0, 0);
    
}

const buttonMap = () => {
    otherBranchesMap.classList.toggle('active')
    
}

const changeBranch1 = () => {
    branchInSmall.innerHTML = addres1.innerHTML
    otherBranchesMap.classList.add('none')
    
}

const changeBranch2 = () => {
    branchInSmall.innerHTML = addres2.innerHTML
}

const changeBranch3 = () => {
    branchInSmall.innerHTML = addres3.innerHTML
}
