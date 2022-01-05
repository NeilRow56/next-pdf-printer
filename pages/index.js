import React, { useRef } from 'react';

import { useReactToPrint } from 'react-to-print';
import { Container, Button, Flex, Text } from '@chakra-ui/react';

class ComponentToPrint extends React.Component {
	render() {
		return (
			<Container align="center" maxW="1150px" my={10}>
				<Flex>
					<Text align="left" fontSize="3xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec sed ultrices lacus. Vestibulum tincidunt massa
						urna, non convallis orci commodo sit amet. Vivamus
						pretium porttitor enim eget mollis. Suspendisse
						fermentum ligula consectetur, mollis tortor faucibus,
						fermentum lorem. Etiam vulputate ultricies mauris et
						condimentum. Vivamus nec aliquet sem, sed tincidunt ex.
						Donec justo sapien, egestas ut nibh nec, sollicitudin
						placerat urna. Curabitur ut nulla a mi pellentesque
						vestibulum ultricies eget mauris. Cras semper felis non
						finibus auctor. Nam lobortis pellentesque lorem quis
						vulputate. Aenean eget pellentesque purus. Curabitur
						tempor at lacus ac congue. Etiam et lectus est. Sed non
						venenatis ante, nec maximus leo. Nullam feugiat odio
						massa, et consectetur nibh porta eu. Suspendisse erat
						lectus, faucibus sed nisl in, tincidunt aliquam purus.
						Phasellus aliquet hendrerit massa, nec tincidunt turpis
						malesuada eget. Nam porta massa massa, vitae laoreet
						libero accumsan in. Aliquam purus turpis, euismod ut
						facilisis ultricies, tempor quis velit. Phasellus non
						ipsum neque. Curabitur vitae velit velit. Aenean dapibus
						mattis dui non blandit. Integer convallis, ipsum nec
						sagittis laoreet, turpis tellus suscipit quam, a euismod
						ligula libero vitae massa. Duis et auctor neque, et
						interdum tortor. Cras nec eleifend odio. Cras maximus
						felis nec mollis rhoncus. Morbi elementum congue
						dignissim. Phasellus risus ante, rhoncus id rutrum
						volutpat, ultrices non dolor. Duis vel ultrices sem. In
						et erat fringilla, congue elit at, varius neque. In ac
						arcu ac neque vehicula dignissim. Cras hendrerit nulla
						et felis rhoncus vulputate. Sed eleifend quam hendrerit
						urna efficitur blandit. Pellentesque ut fermentum leo.
						Vestibulum consequat, nulla non rhoncus pulvinar, diam
						nisi venenatis sapien, laoreet elementum nibh nunc ut
						eros. Morbi non tellus vulputate ante convallis
						fringilla ac pharetra tellus. Nulla ac lectus tempus,
						aliquam mi et, sollicitudin mauris. Suspendisse quam
						metus, ornare interdum maximus at, dignissim quis
						turpis. Aliquam quis tempus sem. Ut tincidunt non ligula
						ac sagittis. Proin ullamcorper interdum mattis. Aenean
						maximus eget justo in bibendum. Aliquam tincidunt
						volutpat ex eu accumsan. Phasellus a malesuada massa, ut
						vestibulum mauris. Sed interdum, lorem at aliquam
						maximus, lacus felis sagittis nulla, finibus sodales
						enim erat nec est. Phasellus mauris turpis, commodo a
						ultrices eget, imperdiet vitae dui. Suspendisse
						ultricies ex vitae quam fringilla, eu pulvinar ex
						cursus. Vestibulum ultrices mollis lacus, in cursus urna
						rhoncus a. In vitae est hendrerit, sagittis tellus eu,
						viverra leo. Proin volutpat feugiat libero non aliquet.
						Pellentesque commodo et felis ut ultricies. Suspendisse
						ante diam, lacinia vitae velit eget, tristique congue
						dui. Nunc neque mauris, consequat id purus a, aliquet
						varius enim. Aenean id lacinia sapien. Phasellus laoreet
						eu mauris vitae congue. Donec sit amet suscipit dui, id
						hendrerit velit. Sed eleifend ante eget posuere
						malesuada. Praesent aliquet dignissim leo, id rutrum
						tellus viverra non. Nunc efficitur augue turpis, ut
						tincidunt nisi tempus finibus. Vestibulum posuere lectus
						arcu, ac fringilla sapien commodo ut. Sed eget tortor
						erat. Aliquam ac enim enim. Sed imperdiet lorem nisi,
						consectetur blandit tellus lobortis a. Proin lobortis
						malesuada suscipit. Aliquam et purus vel ex cursus
						varius. Nam placerat est sed risus faucibus viverra.
						Nunc aliquam arcu id lectus tristique, vel efficitur
						massa auctor. Duis et dictum magna. Cras lacinia mauris
						nibh, at porttitor nibh commodo et. Nunc vulputate
						lobortis hendrerit. Mauris efficitur quis felis eu
						interdum. Donec volutpat orci massa, in ornare libero
						sollicitudin vitae. Etiam lobortis finibus nisi non
						tincidunt. Vestibulum nec congue dui. Sed vehicula
						gravida sem, vel consectetur urna fringilla vel.
						Curabitur accumsan sodales libero, vitae efficitur
						lectus dignissim vel. Nullam molestie augue odio, eu
						sagittis tellus condimentum et. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Vestibulum cursus finibus eleifend.
						Suspendisse suscipit ligula in odio auctor, at tincidunt
						sapien pharetra. Sed euismod eu urna non scelerisque.
						Curabitur eleifend felis mi, vel viverra sem vehicula
						id. Aliquam in metus ac ex scelerisque commodo et non
						dolor. Cras quis magna augue. Pellentesque tincidunt,
						ligula ut elementum suscipit, sapien urna laoreet lorem,
						porttitor sodales odio sem eu ex. Vestibulum eu
						hendrerit nisi, vitae blandit leo. Vivamus egestas massa
						erat, nec congue nulla luctus eget. Praesent feugiat
						eros non accumsan placerat. Pellentesque vitae nisi
						nibh. Duis mollis lobortis arcu ac tincidunt. In et
						risus erat. Aenean blandit, mi accumsan blandit
						venenatis, ex dui ullamcorper risus, sit amet
						consectetur tortor risus non ante. Phasellus non magna
						id velit eleifend lobortis sit amet sollicitudin nisi.
						Suspendisse ipsum velit, convallis pharetra laoreet
						quis, cursus a turpis. Etiam sapien dolor, venenatis sed
						egestas in, condimentum sit amet metus. Vivamus suscipit
						a mi lacinia vehicula. Duis sit amet posuere ex. Proin
						consequat justo sed urna mattis feugiat. Suspendisse
						ultrices dui a justo facilisis varius. Ut et ante ac
						felis sagittis venenatis non at mi. Proin semper quis
						orci a sagittis. Nullam quis erat in ex commodo
						sagittis. Nulla efficitur dui sit amet varius consequat.
						Proin nisi elit, pretium nec purus eu, porta volutpat
						eros. Nunc vel lectus justo. Sed scelerisque, velit
						commodo pulvinar maximus, ligula lectus fermentum enim,
						vel posuere velit leo eu neque. In hac habitasse platea
						dictumst. Fusce ac malesuada urna. Morbi nec erat in
						magna tincidunt sollicitudin. Cras sodales tristique
						libero, nec egestas neque semper at. Integer a nulla
						nulla. Maecenas eget nibh elit. Fusce id sem non risus
						pharetra tincidunt. Pellentesque nunc quam, eleifend et
						bibendum vel, euismod eget felis. Sed rutrum nulla sed
						nisi varius, in imperdiet enim convallis. Nulla aliquet
						ultricies quam non tempor. Morbi non nunc ex. Sed
						posuere justo turpis. Proin ut odio porttitor, elementum
						neque id, tempor purus. Aenean pharetra sem a
						condimentum lacinia. Duis ut purus ut sapien ultrices
						blandit. Nullam aliquet, quam vitae molestie
						ullamcorper, magna mauris egestas mi, id convallis purus
						justo eget felis. Duis facilisis est id est sagittis
						dapibus. Morbi imperdiet finibus massa, tempus ornare
						tellus. Vestibulum at leo laoreet nisi vehicula blandit.
						Integer suscipit purus urna, dignissim euismod mi
						rhoncus eu. Morbi molestie sagittis pharetra. Etiam vel
						neque vel massa mollis pellentesque. Proin orci neque,
						tempor in magna eu, posuere suscipit nunc. Vivamus non
						quam vel elit faucibus aliquet. Nam pulvinar consequat
						laoreet. Vestibulum congue tincidunt metus a tristique.
						Duis faucibus augue tellus, ac lacinia nisl ultricies
						sed. Mauris a libero a nisi maximus blandit. Nulla vel
						sagittis magna. Integer eget ante ac augue consequat
						condimentum. Quisque quis semper nunc. Cras sagittis nec
						dui et mollis. Nulla luctus porttitor sem, in pulvinar
						mauris dictum sit amet. Suspendisse potenti. Nullam
						dapibus quam et dolor hendrerit commodo. Duis porttitor
						libero ut arcu vestibulum eleifend. Maecenas id felis ac
						velit euismod congue eget eu nisl. Sed ac nisi et neque
						condimentum molestie nec a magna. Fusce mattis gravida
						erat maximus porta. In scelerisque leo tellus, vel
						condimentum nunc iaculis in. Nam suscipit vehicula leo a
						malesuada. Proin fringilla velit in massa vulputate, a
						pharetra sem luctus. Nunc nisl mi, blandit id aliquet
						id, malesuada sed erat. Nam in nisl arcu. Cras
						vulputate, mi ac ultricies rutrum, orci neque posuere
						augue, at tincidunt magna quam sit amet purus. In tempus
						metus nisi, sodales tempor tortor pharetra eget. Nam non
						orci eget nunc mattis elementum vel eu ligula.
						Vestibulum et congue elit, a consectetur urna. Cras eu
						quam vitae diam ornare molestie. Fusce finibus eleifend
						velit eleifend viverra. Praesent bibendum lacus nulla,
						vel laoreet libero bibendum vel. In egestas viverra
						elementum. Vestibulum ut varius metus. In ut urna
						consectetur, euismod sem a, vestibulum tortor. Aenean
						nulla lorem, aliquet quis elit vitae, pharetra feugiat
						lorem. Nullam egestas eros at bibendum tempor. In hac
						habitasse platea dictumst. Nulla eu felis a dolor
						tincidunt commodo. Suspendisse potenti. Aliquam porta
						neque a metus convallis porta. Vivamus risus turpis,
						sollicitudin sed augue eu, iaculis ullamcorper dui.
						Curabitur maximus, turpis sed congue pellentesque, justo
						nisl consectetur enim, eget tincidunt ligula mi ac quam.
						Maecenas ex lectus, congue vel orci non, condimentum
						rhoncus est. Sed odio odio, volutpat vitae scelerisque
						vitae, gravida et lacus. Nulla non orci id est suscipit
						blandit in id odio. Suspendisse sed tempus lacus. Sed
						orci sem, aliquam id facilisis at, suscipit ac urna.
						Donec condimentum dui ligula, eget imperdiet tellus
						iaculis vitae. Maecenas nisi lorem, consectetur at
						libero sed, semper finibus ante. Aenean placerat nisi
						nec tempor tempus. Sed non dapibus magna. Pellentesque
						habitant morbi tristique senectus et netus et malesuada
						fames ac turpis egestas. Phasellus sed purus sed nisl
						sollicitudin tincidunt rutrum aliquam magna. Duis sit
						amet venenatis justo, vel accumsan felis. Aenean non mi
						ac justo gravida suscipit. Etiam mollis libero nec
						laoreet lacinia. Praesent et justo nisl. Phasellus
						aliquam, quam ut maximus efficitur, tortor orci dictum
						nulla, quis interdum arcu urna non tortor. Donec et arcu
						dolor. Morbi nisl elit, varius in semper sed, congue
						vitae dui. Quisque tempor eget diam at placerat. Nunc
						vitae mi risus. Cras sit amet diam vitae arcu tempor
						aliquet. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Donec iaculis urna nec tellus pretium
						mattis. Integer arcu mauris, bibendum in ipsum a,
						faucibus vehicula ante. Integer rutrum semper interdum.
						Pellentesque metus mi, luctus non ullamcorper
						condimentum, lobortis et mi. Suspendisse porttitor ante
						dui, id sollicitudin arcu posuere id. Duis nec odio
						augue. Fusce laoreet metus vitae justo aliquet, id
						tempus enim lacinia. Pellentesque tincidunt nibh
						imperdiet, egestas nunc a, vestibulum quam. In hac
						habitasse platea dictumst. In sagittis pretium nulla ac
						pellentesque. Curabitur tincidunt libero in ante
						sagittis hendrerit. Morbi blandit nibh placerat tortor
						dictum, non molestie ex malesuada. Donec leo tortor,
						aliquam dignissim rutrum a, sodales eu risus. Aliquam
						gravida risus eget accumsan semper. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Proin placerat nisl ut neque elementum
						auctor. Vivamus purus tellus, maximus nec efficitur nec,
						malesuada quis dolor. Sed quis sapien ornare,
						condimentum est eget, viverra est. Nam in placerat
						purus. Donec condimentum nunc sit amet odio posuere, eu
						pharetra ipsum luctus. Aenean ultrices, urna nec
						tincidunt sodales, justo odio lacinia felis, vel lacinia
						eros libero ut nisl. Curabitur finibus libero vitae
						lacus placerat feugiat. Sed molestie ipsum tellus, vel
						cursus eros ultrices sed. Integer elit nulla,
						pellentesque vitae ante quis, mollis cursus purus. Donec
						quam eros, gravida eu pretium ut, luctus non nisi. Proin
						faucibus erat et nulla finibus, sed sagittis est varius.
						Sed accumsan risus justo, et elementum quam pellentesque
						vulputate. Etiam id ipsum id quam suscipit rutrum in
						eget nibh. Etiam posuere placerat nisi a facilisis. Duis
						mollis rutrum ipsum, sed tempor leo placerat vitae.
						Fusce sed mauris molestie eros interdum dignissim.
						Aenean eu ante tincidunt, viverra magna ac, ornare
						ipsum. Vivamus risus nisi, auctor in dapibus sit amet,
						sagittis nec magna. Proin elementum elementum lacus eget
						commodo. Vivamus facilisis aliquam tortor ut molestie.
						Ut vitae sem nec quam dictum feugiat. Proin tristique
						arcu sed nibh tincidunt malesuada. Nullam tempus tellus
						ut ullamcorper dignissim. Morbi hendrerit sagittis
						ligula, a finibus massa. Donec venenatis lacus sit amet
						neque malesuada ultricies. Quisque id consequat eros.
						Suspendisse potenti. Suspendisse vel augue viverra,
						posuere mi ac, commodo eros. Etiam a tempus libero.
						Morbi dignissim sit amet dolor in pretium. Integer
						molestie risus ut urna luctus sollicitudin. In mauris
						metus, dapibus ac risus at, elementum gravida orci. Duis
						varius, sem iaculis viverra convallis, magna metus
						lobortis arcu, eget finibus metus mi ac turpis. Vivamus
						in nibh vel dui tincidunt tristique ac non metus. Duis
						viverra fringilla ligula, in posuere quam venenatis non.
						Pellentesque habitant morbi tristique senectus et netus
						et malesuada fames ac turpis egestas. Morbi vitae lorem
						ac lorem cursus elementum. Proin blandit laoreet quam
						non dapibus. Nulla sed sapien tristique, convallis dolor
						eget, posuere felis. Aenean pellentesque nulla in augue
						tristique ornare vestibulum sed sem. Class aptent taciti
						sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Generated 20 paragraphs, 1915 words,
						12866 bytes of Lorem Ipsum
					</Text>
				</Flex>
			</Container>
		);
	}
}

const Example = () => {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<Container align="center" maxWidth="1200px" my={10}>
			<ComponentToPrint ref={componentRef} />
			<Button onClick={handlePrint} mt={10}>
				Print this out!
			</Button>
		</Container>
	);
};

export default Example;
