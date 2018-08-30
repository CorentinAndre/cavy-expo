export default function (spec) {

    spec.describe('Checking profile presence', function () {

        spec.it('verify if profile name present', async function () {
            await spec.exists('Profile.profileName');
        });

        spec.it('verify if age presents', async function() {
            await spec.exists('Profile.age');
        })
    });
}
