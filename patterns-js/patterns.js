    function Pessoa(customProperties) {
        return {
            name: 'Guilherme',
            lastName: 'Cabrint',
            ...customProperties
        }
    }

    const p = Pessoa({ name: 'Custom Name', age: 27 });
    console.log(p);