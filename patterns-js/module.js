    let name = 'dafault';

    function getName() {
        return name;
    }

    function setName(newName) {
        name = newName;
    }

    module.exports = {
        getName,
        setName
    };